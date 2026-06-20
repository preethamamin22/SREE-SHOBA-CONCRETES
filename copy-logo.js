const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\preet\\.gemini\\antigravity-ide\\brain\\38753be9-d1a6-44d2-b055-e36c742ab351\\shoba_logo_1781967748511.png';
const destDir = path.join(__dirname, 'public');
const dest = path.join(destDir, 'logo.png');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(src, dest);
console.log('Logo copied successfully to public/logo.png!');
