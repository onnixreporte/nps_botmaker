# Encuesta de satisfacción (NPS)

Link público para que los clientes contesten una encuesta de satisfacción.
UI minimalista (Inter, blanco y negro), una pregunta por pantalla con barra de
progreso, 100% responsive y con el mínimo JavaScript posible (Astro SSR). Las
respuestas se guardan en una base de datos **Neon** (Postgres), una fila por
encuestado, para analizarlas por persona.

## Preguntas

0. Nombre del encuestado (requerido)
1. Satisfacción con el producto entregado
2. ¿Cumplió con sus expectativas?
3. Cumplimiento de los plazos de entrega
4. Comunicación con el equipo
5. ¿Recomendaría nuestros servicios? (1–5 estrellas)
6. Comentarios adicionales (opcional)

## Puesta en marcha (local)

1. Instala dependencias:

   ```sh
   npm install
   ```

2. Crea una base de datos en [Neon](https://neon.tech) y copia la
   **connection string** (usa la versión *pooled*).

3. Crea la tabla. En el **SQL Editor** de Neon corre:

   ```sql
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
   );
   ```

4. Crea un archivo `.env` (basado en `.env.example`) con tu conexión:

   ```sh
   DATABASE_URL="postgresql://...neon.tech/neondb?sslmode=require"
   ```

5. Levanta el servidor de desarrollo:

   ```sh
   npm run dev
   ```

   Abre <http://localhost:4321>.

## Deploy en Vercel

El proyecto usa el adapter `@astrojs/vercel` con `output: 'server'`.

1. Importa el repo en Vercel (detecta Astro automáticamente).
2. En **Settings → Environment Variables** agrega `DATABASE_URL` con la misma
   connection string de Neon.
3. Deploy.

## Analizar respuestas

Consulta la tabla directamente en Neon. Ejemplos:

```sql
-- Todas las respuestas, más recientes primero
select * from nps_responses order by created_at desc;

-- Promedio de recomendación (estrellas)
select round(avg(recomendacion), 2) as promedio_estrellas from nps_responses;

-- Respuestas de una persona
select * from nps_responses where nombre ilike '%juan%';
```

## Comandos

| Comando           | Acción                                       |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Servidor local en `localhost:4321`           |
| `npm run build`   | Build de producción en `./dist/`             |
| `npm run preview` | Previsualiza el build localmente             |
