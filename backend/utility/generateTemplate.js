const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage, GlobalFonts } = require("@napi-rs/canvas");
const { Readable } = require("stream");
const cloudinary = require("./cloudinary");

// ✅ Register Montserrat font once
const fontPath = path.join(__dirname, "../assets/fonts/Montserrat-Regular.ttf");
if (!fs.existsSync(fontPath)) {
  throw new Error("Font file not found");
}
GlobalFonts.registerFromPath(fontPath, "Montserrat");

// ✅ Helper: draw wrapped & left-aligned text
function drawRichText(
  ctx,
  parts,
  yStart,
  fontSize = 40,
  lineHeight = 50,
  canvasWidth,
  maxWidth = canvasWidth - 200,
  xStart = 670
) {
  let line = [];
  let y = yStart;

  const flushLine = () => {
    if (line.length > 0) {
      let x = xStart;
      for (const p of line) {
        ctx.font = `${p.bold ? "bold" : ""} ${fontSize}px Montserrat`;
        ctx.fillText(p.text, x, y);
        x += ctx.measureText(p.text).width;
      }
      line = [];
      y += lineHeight;
    }
  };

  for (let i = 0; i < parts.length; i++) {
    const { text, bold } = parts[i];
    const font = `${bold ? "bold" : ""} ${fontSize}px Montserrat`;
    ctx.font = font;

    // 🔑 handle explicit \n breaks
    const segments = text.split("\n");
    for (let s = 0; s < segments.length; s++) {
      const words = segments[s].split(" ");
      for (let w = 0; w < words.length; w++) {
        const word = words[w] + " ";
        const width = ctx.measureText(line.map(p => p.text).join("") + word).width;

        if (width > maxWidth && line.length > 0) {
          flushLine();
        }
        line.push({ text: word, bold });
      }
      if (s < segments.length - 1) {
        // force line break
        flushLine();
      }
    }
  }

  // draw last line
  flushLine();
}
// ✅ Generate certificate as PNG buffer
async function generateCertificateImage(data) {
  const templatePath = path.join(__dirname, "../assets/Certificate-Template.png");
  if (!fs.existsSync(templatePath)) throw new Error("Template not found");

  const template = await loadImage(templatePath);
  const canvas = createCanvas(template.width, template.height);
  const ctx = canvas.getContext("2d");

  // Draw template
  ctx.drawImage(template, 0, 0, template.width, template.height);

  // Line 1 -> credentials bold
  drawRichText(ctx, [
    { text: "This Certificate is Given To : ", bold: false },
    { text: data.credentials, bold: true },
  ], 650, 40, 50, canvas.width, canvas.width - 640);

  // Line 2 -> full bold
  drawRichText(ctx, [
    { text: data.name, bold: true },
  ], 750, 60, 60, canvas.width, canvas.width - 640);

  // Line 3 -> mixed
  drawRichText(ctx, [
    { text: "for successfully completing the Internship Program at ", bold: false },
    { text: "SYNTECXHUB", bold: true },
    { text: " in", bold: false },
    { text: data.domain.toUpperCase(), bold: true },
    { text: " showing active participation from ", bold: false },
    { text: data.startDate, bold: true },
    { text: " to ", bold: false },
    { text: data.endDate, bold: true },
    { text: " with unwavering dedication.", bold: false },
  ], 830, 35, 50, canvas.width, canvas.width - 730);

  return canvas.toBuffer("image/png");
}

// ✅ Upload PNG buffer to Cloudinary
async function uploadToCloudinary(buffer, filename) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "image",
        folder: "certificates",
        public_id: filename,
        format: "png",
        access_mode: "public",
      },
      (err, result) => {
        if (err) return reject(err);
        resolve({ url: result.secure_url, public_id: result.public_id });
      }
    );

    Readable.from(buffer).pipe(stream);
  });
}

module.exports = { generateCertificateImage, uploadToCloudinary };