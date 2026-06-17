import { neon } from '@neondatabase/serverless';

let cached = null;
function getSql() {
  if (cached) return cached;
  const url = process.env.DATABASE_URL ?? undefined                            ;
  if (!url) {
    throw new Error("Falta la variable de entorno DATABASE_URL");
  }
  cached = neon(url);
  return cached;
}

const prerender = false;
const OPCIONES = {
  satisfaccion_producto: [
    "Muy insatisfecho",
    "Insatisfecho",
    "Ni satisfecho ni insatisfecho",
    "Satisfecho",
    "Muy satisfecho"
  ],
  cumplio_expectativas: ["No cumplió", "Parcialmente", "Sí totalmente"],
  cumplimiento_plazos: ["Malo", "Regular", "Bueno", "Muy bueno"],
  comunicacion: ["Deficiente", "Regular", "Buena", "Excelente"]
};
function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
function bad(error) {
  return json({ ok: false, error }, 400);
}
const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return bad("JSON inválido");
  }
  const nombre = typeof body.nombre === "string" ? body.nombre.trim() : "";
  if (!nombre || nombre.length > 120) return bad("Nombre requerido");
  const valores = {};
  for (const [campo, permitidas] of Object.entries(OPCIONES)) {
    const v = body[campo];
    if (typeof v !== "string" || !permitidas.includes(v)) {
      return bad(`Respuesta inválida para "${campo}"`);
    }
    valores[campo] = v;
  }
  const recomendacion = Number(body.recomendacion);
  if (!Number.isInteger(recomendacion) || recomendacion < 1 || recomendacion > 5) {
    return bad("La recomendación debe ser un entero de 1 a 5");
  }
  let comentarios = null;
  if (typeof body.comentarios === "string") {
    const c = body.comentarios.trim();
    comentarios = c.length ? c.slice(0, 2e3) : null;
  }
  try {
    const sql = getSql();
    await sql`
      insert into nps_responses
        (nombre, satisfaccion_producto, cumplio_expectativas,
         cumplimiento_plazos, comunicacion, recomendacion, comentarios)
      values
        (${nombre}, ${valores.satisfaccion_producto}, ${valores.cumplio_expectativas},
         ${valores.cumplimiento_plazos}, ${valores.comunicacion}, ${recomendacion}, ${comentarios})
    `;
  } catch (e) {
    console.error("Error guardando respuesta NPS:", e);
    return json({ ok: false, error: "Error del servidor" }, 500);
  }
  return json({ ok: true }, 201);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
