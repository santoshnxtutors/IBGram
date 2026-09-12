// `server-only` throws when imported outside a Next server component. These audit
// scripts run the same server modules under tsx, so neutralise the guard.
const Module = require("module");
const orig = Module._resolveFilename;
Module._resolveFilename = function (request, ...rest) {
  if (request === "server-only") return require.resolve("./noop.cjs");
  return orig.call(this, request, ...rest);
};
