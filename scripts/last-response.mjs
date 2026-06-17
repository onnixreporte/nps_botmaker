// Muestra las últimas respuestas guardadas.
// Uso: node --env-file=.env scripts/last-response.mjs
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);
const rows = await sql`
  select nombre, satisfaccion_producto, cumplio_expectativas, cumplimiento_plazos,
         comunicacion, recomendacion, comentarios, created_at
  from nps_responses
  order by created_at desc
  limit 5
`;
console.log(JSON.stringify(rows, null, 2));
