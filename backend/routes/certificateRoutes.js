const express = require("express");
const router = express.Router();
const Certificate = require("../models/Certificate");
const { generateCertificateImage, uploadToCloudinary } = require("../utility/generateTemplate");
const cloudinary = require("../utility/cloudinary");

// 🔹 Generate Certificates
router.post("/generate", async (req, res) => {
  try {
    const users = req.body;

    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).json({ error: "No user data provided" });
    }

    let savedCertificates = [];

    for (const user of users) {
      // Generate certificate image
      const pdfBuffer = await generateCertificateImage(user);

      // Upload to Cloudinary
      const { url, public_id } = await uploadToCloudinary(
        pdfBuffer,
        `${user.credentials}-${Date.now()}`
      );

      // 🔹 Create verification link
      const verificationLink = `https://syntecxhub.com/certificate/${user.credentials}`;

      // Save certificate in DB
      const certificate = new Certificate({
        ...user,
        imageUrl: url,
        cloudinaryId: public_id,
        verificationLink, // ✅ added field
      });

      await certificate.save();
      savedCertificates.push(certificate);
    }

    res.status(201).json({
      success: true,
      message: "Certificates generated successfully",
      certificates: savedCertificates,
    });
  } catch (error) {
    console.error("Error generating certificates:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🔹 Get Certificates by Email
router.get("/by-email/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const certificates = await Certificate.find({ email });

    if (!certificates || certificates.length === 0) {
      return res.status(404).json({ success: false, message: "No certificates found for this email" });
    }

    res.status(200).json({
      success: true,
      certificates,
    });
  } catch (error) {
    console.error("Error fetching certificates:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🔹 Get All Certificates
router.get("/all", async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 }); // latest first

    res.status(200).json({
      success: true,
      total: certificates.length,
      certificates,
    });
  } catch (error) {
    console.error("Error fetching all certificates:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🔹 Delete Certificate
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const certificate = await Certificate.findById(id);
    if (!certificate) {
      return res.status(404).json({ success: false, message: "Certificate not found" });
    }

    // ✅ Delete image from Cloudinary
    if (certificate.cloudinaryId) {
      await cloudinary.uploader.destroy(certificate.cloudinaryId, { resource_type: "image" });
    }

    // ✅ Delete from MongoDB
    await certificate.deleteOne();

    res.status(200).json({ success: true, message: "Certificate deleted successfully" });
  } catch (error) {
    console.error("Error deleting certificate:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// backend/routes/certificates.js
router.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;

    // 🔹 Find certificate by credentials
    const cert = await Certificate.findOne({ credentials: code });

    if (!cert) {
      return res
        .status(404)
        .json({ success: false, message: "Certificate not found" });
    }

    res.json({ success: true, certificate: cert });
  } catch (err) {
    console.error("Error fetching certificate:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;