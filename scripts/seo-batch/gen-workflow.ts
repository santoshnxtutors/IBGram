import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
const ROOT = path.resolve(__dirname, "..", "..");
const entries = JSON.parse(readFileSync(path.join(ROOT, "tmp", "batch1", "remaining-args.json"), "utf8"));
const tpl = readFileSync(path.join(ROOT, "scripts", "seo-batch", "writer-workflow.js"), "utf8");
const argsBlock = `let A = args;
if (typeof A === 'string') { try { A = JSON.parse(A); } catch (e) { A = {}; } }
if (!A || typeof A !== 'object') A = {};
const root = A.root;
const entries = Array.isArray(A.entries) ? A.entries : [];
log(\`args typeof=\${typeof args} root=\${root ? 'set' : 'MISSING'} entries=\${entries.length}\`);`;
const embedded = `const root = ${JSON.stringify(ROOT)};
const entries = ${JSON.stringify(entries)};
log('embedded entries=' + entries.length);`;
if (!tpl.includes(argsBlock)) { console.error("ARGS BLOCK NOT FOUND"); process.exit(1); }
const out = tpl.replace(argsBlock, embedded).replace("ibgram-seo-writer", "ibgram-seo-writer-full");
writeFileSync(path.join(ROOT, "scripts", "seo-batch", "writer-workflow-full.js"), out);
console.log("Generated writer-workflow-full.js with", entries.length, "embedded entries. root=", ROOT);
