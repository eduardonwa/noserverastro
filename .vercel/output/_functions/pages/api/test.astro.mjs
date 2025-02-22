export { renderers } from '../../renderers.mjs';

function handler(req, res) {
  throw new Error("Forzando un error en la función serverless");
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
