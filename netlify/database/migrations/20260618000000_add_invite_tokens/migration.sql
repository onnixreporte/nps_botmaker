CREATE TABLE "invite_tokens" (
  "token" text PRIMARY KEY NOT NULL,
  "nombre" text NOT NULL,
  "proyecto" text NOT NULL,
  "used_at" timestamp
);

ALTER TABLE "nps_responses" ADD COLUMN "proyecto" text;
ALTER TABLE "nps_responses" ADD COLUMN "token" text;

INSERT INTO "invite_tokens" (token, nombre, proyecto) VALUES
('EZP4KR', 'Ezio', 'Bot - Preventa y posventa'),
('SF9MX2', 'Sofia', 'Bot - Preventa y posventa'),
('CH7NQ3', 'Christian', 'Bot - Preventa'),
('CV5WT8', 'Christian Vera', 'Bot - Setup'),
('RQ2A6B', 'Raquel', 'Validador - Buró'),
('NT8J3M', 'Natalia', 'Validador - Buró'),
('AJ4K9P', 'Alejandro', 'Bot - IA y Reportería'),
('OL6R2T', 'Olga', 'Bot - IA y Reportería'),
('MT9V4B', 'Montserrat', 'Reportería'),
('MG5W2Y', 'Magalí', 'Reportería'),
('GD3N7H', 'Guadalupe', 'Reportería'),
('BR6Q4K', 'Berelice', 'Reportería');
