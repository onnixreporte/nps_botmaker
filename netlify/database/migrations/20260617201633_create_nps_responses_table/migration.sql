CREATE TABLE "nps_responses" (
	"id" serial PRIMARY KEY,
	"nombre" text NOT NULL,
	"satisfaccion_producto" text NOT NULL,
	"cumplio_expectativas" text NOT NULL,
	"cumplimiento_plazos" text NOT NULL,
	"comunicacion" text NOT NULL,
	"recomendacion" integer NOT NULL,
	"comentarios" text,
	"created_at" timestamp DEFAULT now()
);
