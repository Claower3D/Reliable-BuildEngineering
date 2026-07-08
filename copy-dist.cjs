const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '.output', 'public');
const dest = path.join(__dirname, 'dist');

if (fs.existsSync(src)) {
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
  console.log('Successfully copied .output/public to dist');
} else {
  console.error('Source directory .output/public not found!');
  process.exit(1);
}
