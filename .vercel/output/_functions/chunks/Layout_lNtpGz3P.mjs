import { c as createComponent } from './astro-component_Cb6-czRh.mjs';
import 'piccolore';
import { x as renderHead, q as renderSlot, k as renderTemplate } from './entrypoint_BhfZ9ZL0.mjs';
import 'clsx';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Encuesta de satisfacción" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/dchaparro/Desktop/nps_botmaker/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
