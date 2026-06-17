import { c as createComponent } from './astro-component_Cb6-czRh.mjs';
import 'piccolore';
import { p as createRenderInstruction, m as maybeRenderHead, k as renderTemplate, q as renderSlot, h as addAttribute, o as renderComponent, v as Fragment, w as generateCspDigest, s as spreadAttributes, u as unescapeHTML } from './entrypoint_BhfZ9ZL0.mjs';
import { $ as $$Layout } from './Layout_lNtpGz3P.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$BarraProgreso = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="progress" role="progressbar" aria-label="Progreso de la encuesta" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" id="progress" data-astro-cid-5r5c2uvr> <div class="progress__fill" id="progress-fill" data-astro-cid-5r5c2uvr></div> </div>`;
}, "C:/Users/dchaparro/Desktop/nps_botmaker/src/components/BarraProgreso.astro", void 0);

const $$Pregunta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Pregunta;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="step" data-step hidden data-astro-cid-ka4iibi4> <div class="step__head" data-astro-cid-ka4iibi4> <h2 class="step__title" data-astro-cid-ka4iibi4>${title}</h2> ${subtitle && renderTemplate`<p class="step__subtitle" data-astro-cid-ka4iibi4>${subtitle}</p>`} </div> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/dchaparro/Desktop/nps_botmaker/src/components/Pregunta.astro", void 0);

const $$OpcionUnica = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OpcionUnica;
  const { name, options } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="opciones" role="radiogroup" data-astro-cid-hw7sk4mh> ${options.map((opt) => renderTemplate`<label class="opcion" data-astro-cid-hw7sk4mh> <input type="radio"${addAttribute(name, "name")}${addAttribute(opt, "value")} required data-astro-cid-hw7sk4mh> <span class="opcion__dot" aria-hidden="true" data-astro-cid-hw7sk4mh></span> <span class="opcion__text" data-astro-cid-hw7sk4mh>${opt}</span> </label>`)} </div>`;
}, "C:/Users/dchaparro/Desktop/nps_botmaker/src/components/OpcionUnica.astro", void 0);

const $$Estrellas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Estrellas;
  const { name = "recomendacion" } = Astro2.props;
  const valores = [5, 4, 3, 2, 1];
  return renderTemplate`${maybeRenderHead()}<div class="estrellas" role="radiogroup" aria-label="Calificación de 1 a 5 estrellas" data-astro-cid-nhzoyo74> ${valores.map((v) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-nhzoyo74": true }, { "default": ($$result2) => renderTemplate` <input type="radio"${addAttribute(`${name}-${v}`, "id")}${addAttribute(name, "name")}${addAttribute(v, "value")} required data-astro-cid-nhzoyo74> <label${addAttribute(`${name}-${v}`, "for")}${addAttribute(`${v} ${v === 1 ? "estrella" : "estrellas"}`, "aria-label")} data-astro-cid-nhzoyo74> <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true" data-astro-cid-nhzoyo74> <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.31l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" data-astro-cid-nhzoyo74></path> </svg> </label> ` })}`)} </div>`;
}, "C:/Users/dchaparro/Desktop/nps_botmaker/src/components/Estrellas.astro", void 0);

function createSvgComponent({ meta, attributes, children, styles }) {
  const hasStyles = styles.length > 0;
  const Component = createComponent({
    async factory(result, props) {
      const normalizedProps = normalizeProps(attributes, props);
      if (hasStyles && result.cspDestination) {
        for (const style of styles) {
          const hash = await generateCspDigest(style, result.cspAlgorithm);
          result._metadata.extraStyleHashes.push(hash);
        }
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
    },
    propagation: hasStyles ? "self" : "none"
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const logo = createSvgComponent({"meta":{"src":"/_astro/logo.BMc052wS.svg","width":179,"height":45,"format":"svg"},"attributes":{"viewBox":"0 0 179.02106 45.15791"},"children":"<!-- Generator: Adobe Illustrator 28.7.1, SVG Export Plug-In . SVG Version: 1.2.0 Build 142)  -->\n  <g>\n    <g id=\"Capa_1\">\n      <path d=\"M34.78631,3.60874c-.39484-.2548-.9182-.1786-1.23863.16515l-2.38503,2.55812c-.43025.46147-.31588,1.19433.225,1.51911,4.28329,2.57204,7.41514,6.97902,8.17275,12.31108.67538,4.75314-.66603,9.32625-3.37123,12.85881-.19513.25483-.26145.58473-.16757.89166l1.18819,3.88515c.22152.72433,1.13861.9318,1.66172.384,4.61316-4.83099,7.04654-11.65247,6.03392-18.77908-.9587-6.7471-4.80993-12.36757-10.11911-15.79398l-.00002-.00002ZM32.32009,38.1614c-.18405-.60181-.87371-.87138-1.42367-.56541-1.78667.99405-3.7812,1.68479-5.92641,1.98959-7.92525,1.12612-15.35031-3.3511-18.27978-10.4192-.12285-.29641-.37522-.51919-.68784-.59135l-3.9515-.91185c-.72561-.16745-1.37879.50445-1.17174,1.21976,3.07695,10.62892,13.57928,17.64919,24.85033,16.04767,2.56213-.36405,4.95935-1.14916,7.13823-2.26928.41758-.21469.6128-.70563.47548-1.15464,0,0-1.0231-3.34529-1.0231-3.34529ZM5.38055,22.29427c.12722-8.30548,6.27287-15.51704,14.75644-16.72245,1.57995-.22449,3.14012-.22616,4.64889-.02927.31789.04149.6359-.06587.85451-.30036l2.76783-2.96869c.50712-.5439.25393-1.44491-.46812-1.62272C25.21736-.01969,22.32389-.19187,19.37752.22679,8.47852,1.77543.51076,10.86604.0011,21.46968c-.02256.46874.30504.88291.76228.98844l3.41547.78819c.61361.1416,1.19205-.32241,1.2017-.95204ZM177.65987.49333h-5.13065c-.31354,0-.60818.14984-.79288.4032l-9.09972,12.4831c-.25256.34648-.2505.81694.0051,1.16119l2.48241,3.34348c.19746.26595.59607.26448.79156-.00291l12.1411-16.60621c.2375-.32484.00549-.78185-.3969-.78185h-.00003ZM146.21661.49333h-5.16864c-.40224,0-.63428.45668-.39711.78156l14.52614,19.89846c.37784.51759.37689,1.22029-.00237,1.73685l-15.39726,20.97176c-.2384.32473-.00653.78264.39632.78264h5.12915c.31276,0,.60678-.1491.79158-.40142l12.43285-16.97539c.39326-.53695,1.19513-.53648,1.58775.00093l12.40112,16.97354c.18474.25286.4791.40235.79225.40235h5.22009c.40405,0,.63562-.46034.39476-.78476L147.00496.88989c-.18523-.24948-.47762-.39656-.78835-.39656ZM130.88957,44.66461h3.40572c.54189,0,.98119-.43929.98119-.98118V1.47451c0-.54189-.43929-.98118-.98119-.98118h-3.40572c-.54189,0-.98119.43929-.98119.98118v42.20892c0,.54189.43929.98118.98119.98118ZM118.12858,35.14587c0,.4667-.58932.67083-.878.30411L90.02721.86702c-.18574-.23596-.46945-.37369-.76975-.37369h-4.30898c-.46532,0-.84254.37722-.84254.84254h0c0,.18906.06347.37264.18023.52133l5.1867,6.60509,28.1335,35.82711c.18601.23688.47051.3752.77169.3752h4.16886c.54189,0,.98118-.43929.98118-.98118V1.47451c0-.54189-.43929-.98118-.98118-.98118h-3.43717c-.54189,0-.98118.43929-.98118.98118v33.67137h.00002ZM83.22759,35.57709L55.97245.86853c-.18601-.23688-.47051-.3752-.77169-.3752h-4.16886c-.54189,0-.98118.43929-.98118.98118v42.20892c0,.54189.43929.98118.98118.98118h3.43717c.54189,0,.98118-.43929.98118-.98118V10.01207c0-.4667.58932-.67083.878-.30411l27.22239,34.58172c.18637.23675.47102.37494.77232.37494h4.16874c.54189,0,.98118-.43929.98118-.98118V15.95359c0-.21975-.07377-.43314-.20949-.60597l-4.27908-5.44927c-.28842-.36729-.87836-.16334-.87836.30365v25.07143c0,.46699-.58994.67094-.87836.30365h0Z\" />\n    </g>\n  </g>\n","styles":[]});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Encuesta de satisfacción", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BarraProgreso", $$BarraProgreso, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main class="wrap" data-astro-cid-j7pv25f6> <header class="brand" data-astro-cid-j7pv25f6> <img class="brand__logo"${addAttribute(logo.src, "src")}${addAttribute(logo.width, "width")}${addAttribute(logo.height, "height")} alt="Logo" data-astro-cid-j7pv25f6> </header> <form id="encuesta" novalidate data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Pregunta", $$Pregunta, { "title": "Antes de empezar, ¿cómo te llamas?", "subtitle": "Tus respuestas nos ayudan a mejorar. Toma menos de 2 minutos.", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <input class="campo-texto" type="text" name="nombre" autocomplete="name" placeholder="Tu nombre" maxlength="120" required data-astro-cid-j7pv25f6> ` })} ${renderComponent($$result2, "Pregunta", $$Pregunta, { "title": "Sobre el proyecto entregado: ¿Qué tan satisfecho/a está con el producto entregado?", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "OpcionUnica", $$OpcionUnica, { "name": "satisfaccion_producto", "options": [
    "Muy satisfecho",
    "Satisfecho",
    "Ni satisfecho ni insatisfecho",
    "Insatisfecho",
    "Muy insatisfecho"
  ], "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "Pregunta", $$Pregunta, { "title": "Calidad y cumplimiento: ¿El proyecto cumplió con sus expectativas?", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "OpcionUnica", $$OpcionUnica, { "name": "cumplio_expectativas", "options": ["Sí totalmente", "Parcialmente", "No cumplió"], "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "Pregunta", $$Pregunta, { "title": "¿Cómo evaluaría el cumplimiento de los plazos de entrega?", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "OpcionUnica", $$OpcionUnica, { "name": "cumplimiento_plazos", "options": ["Muy bueno", "Bueno", "Regular", "Malo"], "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "Pregunta", $$Pregunta, { "title": "Comunicación y atención: ¿Cómo calificaría la comunicación con nuestro equipo durante el proyecto?", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "OpcionUnica", $$OpcionUnica, { "name": "comunicacion", "options": ["Excelente", "Buena", "Regular", "Deficiente"], "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "Pregunta", $$Pregunta, { "title": "Recomendación: ¿Recomendaría nuestros servicios a otra empresa?", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Estrellas", $$Estrellas, { "name": "recomendacion", "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "Pregunta", $$Pregunta, { "title": "Comentarios adicionales", "subtitle": "Opcional", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <textarea class="campo-texto" name="comentarios" rows="5" maxlength="2000" placeholder="Cuéntanos cualquier cosa que quieras agregar…" data-astro-cid-j7pv25f6></textarea> ` })} <p class="error" id="error" role="alert" aria-live="polite" data-astro-cid-j7pv25f6></p> <div class="nav" data-astro-cid-j7pv25f6> <div class="nav__row" data-astro-cid-j7pv25f6> <button type="button" class="btn btn--ghost" id="btn-back" hidden data-astro-cid-j7pv25f6>Atrás</button> <button type="button" class="btn btn--primary" id="btn-next" data-astro-cid-j7pv25f6>Siguiente</button> </div> </div> </form> <noscript> <p class="error" data-astro-cid-j7pv25f6>Esta encuesta necesita JavaScript activado para funcionar.</p> </noscript> </main> ` })}  ${renderScript($$result, "C:/Users/dchaparro/Desktop/nps_botmaker/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/dchaparro/Desktop/nps_botmaker/src/pages/index.astro", void 0);

const $$file = "C:/Users/dchaparro/Desktop/nps_botmaker/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
