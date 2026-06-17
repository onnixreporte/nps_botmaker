import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

let cached: NeonQueryFunction<false, false> | null = null;

/**
 * Cliente Neon (lazy). Lee DATABASE_URL en tiempo de ejecución para no
 * romper el build cuando la variable no está presente.
 */
export function getSql(): NeonQueryFunction<false, false> {
  if (cached) return cached;

  const url = process.env.DATABASE_URL ?? import.meta.env.DATABASE_URL;
  if (!url) {
    throw new Error('Falta la variable de entorno DATABASE_URL');
  }

  cached = neon(url);
  return cached;
}
