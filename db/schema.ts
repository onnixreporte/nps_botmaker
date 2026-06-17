import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const npsResponses = pgTable('nps_responses', {
  id: serial().primaryKey(),
  nombre: text().notNull(),
  satisfaccion_producto: text('satisfaccion_producto').notNull(),
  cumplio_expectativas: text('cumplio_expectativas').notNull(),
  cumplimiento_plazos: text('cumplimiento_plazos').notNull(),
  comunicacion: text().notNull(),
  recomendacion: integer().notNull(),
  comentarios: text(),
  createdAt: timestamp('created_at').defaultNow(),
});
