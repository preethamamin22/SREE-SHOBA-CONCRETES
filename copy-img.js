const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\preet\\.gemini\\antigravity-ide\\brain\\9578dbe0-bb2c-4ec4-b94e-b41dddd28fe5\\hero_concrete_plant_1781603139015.png';
const destDir = path.join(__dirname, 'public', 'images');
const dest = path.join(destDir, 'hero-bg.png');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(src, dest);
console.log('Copied successfully!');
