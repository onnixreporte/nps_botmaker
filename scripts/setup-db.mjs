// Crea la tabla nps_responses en Neon (idempotente) y muestra su estado.
// Uso: node --env-file=.env scripts/setup-db.mjs
import { neon } from '@neondatabase/serverless';

const url = process.env.DATABASE_URL;
if (!url) {
  console.error('Falta DATABASE_URL. Corre con: node --env-file=.env scripts/setup-db.mjs');
  process.exit(1);
}

const sql = neon(url);

await sql`
  create table if not exists nps_responses (
    id                    uuid primary key default gen_random_uuid(),
    nombre                text        not null,
    satisfaccion_producto text        not null,
    cumplio_expectativas  text        not null,
    cumplimiento_plazos   text        not null,
    comunicacion          text        not null,
    recomendacion         smallint    not null check (recomendacion between 1 and 5),
    comentarios           text,
    created_at            timestamptz not null default now()
  )
`;

const cols = await sql`
  select column_name, data_type
  from information_schema.columns
  where table_name = 'nps_responses'
  order by ordinal_position
`;

const [{ count }] = await sql`select count(*)::int as count from nps_responses`;

console.log('✓ Tabla nps_responses lista. Columnas:');
for (const c of cols) console.log('  -', c.column_name, '·', c.data_type);
console.log('Filas actuales:', count);
