const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema(
  {
    credentials: { type: String, required: true },
    name: { type: String, required: true },
    domain: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    email: { type: String, required: true },

    // 🔹 Renamed
    imageUrl: { type: String, required: true }, // Cloudinary file URL
    cloudinaryId: { type: String, required: true }, // ✅ Needed to delete

    // 🔹 New field
    verificationLink: { type: String, required: true }, 
    // Example: "https://syntecxhub.com/certificate/CER-001"
  },
  { timestamps: true }
);

module.exports = mongoose.model("Certificate", CertificateSchema);