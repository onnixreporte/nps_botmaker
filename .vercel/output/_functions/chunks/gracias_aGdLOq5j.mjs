import { c as createComponent } from './astro-component_Cb6-czRh.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_BhfZ9ZL0.mjs';
import { $ as $$Layout } from './Layout_lNtpGz3P.mjs';

const $$Gracias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "¡Gracias!", "data-astro-cid-27lbuprk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="gracias" data-astro-cid-27lbuprk> <div class="gracias__card" data-astro-cid-27lbuprk> <svg class="gracias__icon" viewBox="0 0 24 24" width="56" height="56" aria-hidden="true" data-astro-cid-27lbuprk> <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-27lbuprk></circle> <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-27lbuprk></path> </svg> <h1 data-astro-cid-27lbuprk>¡Gracias por tu tiempo!</h1> <p data-astro-cid-27lbuprk>Recibimos tus respuestas. Tu opinión nos ayuda a mejorar.</p> </div> </main> ` })}`;
}, "C:/Users/dchaparro/Desktop/nps_botmaker/src/pages/gracias.astro", void 0);

const $$file = "C:/Users/dchaparro/Desktop/nps_botmaker/src/pages/gracias.astro";
const $$url = "/gracias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gracias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
