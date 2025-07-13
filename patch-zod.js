// Create a symbolic link from 'zod/v3' to the main 'zod'
const fs = require("fs");
const path = require("path");

const zodDir = path.join(__dirname, "node_modules", "zod");
const zodV3Path = path.join(zodDir, "v3.js");

if (!fs.existsSync(zodV3Path)) {
  fs.writeFileSync(zodV3Path, 'module.exports = require("./lib/index");');
  console.log("✅ Patched zod/v3");
} else {
  console.log("ℹ️ Already patched");
}
