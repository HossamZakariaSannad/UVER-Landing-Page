const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDirs = ["./public", "./src/assets"];  // Expanded to check src if needed

function optimizeImages(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      optimizeImages(fullPath);
    } else if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
      const webpPath = path.join(dir, `${path.parse(file).name}.webp`);
      sharp(fullPath)
        .webp({ quality: 75 })  // Lowered quality for uniqueness
        .toFile(webpPath)
        .then(() => {
          console.log(`Optimized: ${fullPath} -> ${webpPath}`);
          fs.unlinkSync(fullPath);
        })
        .catch(err => console.error(`Error: ${fullPath}`, err));
    }
  });
}

function updateImports(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateImports(fullPath);
    } else if (/\.(js|jsx)$/i.test(file)) {
      let code = fs.readFileSync(fullPath, "utf-8");
      const newCode = code.replace(/\.(jpg|jpeg|png|gif)/gi, ".webp");
      if (newCode !== code) {
        fs.writeFileSync(fullPath, newCode);
        console.log(`Updated imports in: ${fullPath}`);
      }
    }
  });
}

inputDirs.forEach(optimizeImages);
updateImports("./src");

console.log("Images optimized and imports refreshed!");