import type { APIRoute } from 'astro';
import { eq } from 'drizzle-orm';
import { db, npsResponses, inviteTokens } from '../../lib/db';

export const prerender = false;

const OPCIONES: Record<string, readonly string[]> = {
  satisfaccion_producto: [
    'Muy insatisfecho',
    'Insatisfecho',
    'Ni satisfecho ni insatisfecho',
    'Satisfecho',
    'Muy satisfecho',
  ],
  cumplio_expectativas: ['No cumplió', 'Parcialmente', 'Sí totalmente'],
  cumplimiento_plazos: ['Malo', 'Regular', 'Bueno', 'Muy bueno'],
  comunicacion: ['Deficiente', 'Regular', 'Buena', 'Excelente'],
};

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function bad(error: string): Response {
  return json({ ok: false, error }, 400);
}

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return bad('JSON inválido');
  }

  const nombre = typeof body.nombre === 'string' ? body.nombre.trim() : '';
  if (!nombre || nombre.length > 120) return bad('Nombre requerido');

  const valores: Record<string, string> = {};
  for (const [campo, permitidas] of Object.entries(OPCIONES)) {
    const v = body[campo];
    if (typeof v !== 'string' || !permitidas.includes(v)) {
      return bad(`Respuesta inválida para "${campo}"`);
    }
    valores[campo] = v;
  }

  const recomendacion = Number(body.recomendacion);
  if (!Number.isInteger(recomendacion) || recomendacion < 1 || recomendacion > 5) {
    return bad('La recomendación debe ser un entero de 1 a 5');
  }

  let comentarios: string | null = null;
  if (typeof body.comentarios === 'string') {
    const c = body.comentarios.trim();
    comentarios = c.length ? c.slice(0, 2000) : null;
  }

  const token = typeof body.token === 'string' ? body.token.trim() : null;
  const proyecto = typeof body.proyecto === 'string' ? body.proyecto.trim() : null;

  try {
    await db.insert(npsResponses).values({
      nombre,
      proyecto,
      token,
      satisfaccion_producto: valores.satisfaccion_producto,
      cumplio_expectativas: valores.cumplio_expectativas,
      cumplimiento_plazos: valores.cumplimiento_plazos,
      comunicacion: valores.comunicacion,
      recomendacion,
      comentarios,
    });

    if (token) {
      await db
        .update(inviteTokens)
        .set({ usedAt: new Date() })
        .where(eq(inviteTokens.token, token));
    }
  } catch (e) {
    console.error('Error guardando respuesta NPS:', e);
    return json({ ok: false, error: 'Error del servidor' }, 500);
  }

  return json({ ok: true }, 201);
};
