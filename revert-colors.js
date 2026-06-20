const fs = require("fs");
const path = require("path");

const dirs = [".", "components", "app"];
const replacements = [
  { from: /#0050BE/gi, to: "#1B3A6B" },
  { from: /#D21428/gi, to: "#E87B2C" },
  { from: /#003380/gi, to: "#0F2D55" }
];

function processDir(dir) {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) return;
  const files = fs.readdirSync(fullPath);
  for (const file of files) {
    if (file === "node_modules" || file === ".git" || file === ".next") continue;
    const curPath = path.join(fullPath, file);
    if (fs.statSync(curPath).isDirectory()) {
      processDir(path.join(dir, file));
    } else if (curPath.endsWith(".tsx") || curPath.endsWith(".ts") || curPath.endsWith(".css")) {
      let content = fs.readFileSync(curPath, "utf8");
      let changed = false;
      for (const r of replacements) {
        if (content.match(r.from)) {
          content = content.replace(r.from, r.to);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(curPath, content, "utf8");
        console.log("Updated", curPath);
      }
    }
  }
}

dirs.forEach(processDir);
console.log("Colors reverted!");
