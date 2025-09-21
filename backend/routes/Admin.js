const express = require("express");
const router = express.Router();
const { requireAuth } = require("@clerk/express");
const { clerkClient } = require("@clerk/clerk-sdk-node");

// ✅ Route to check if current user is admin
router.get("/check", requireAuth(), async (req, res) => {
  try {
    const userId = req.auth.userId;

    if (!userId) {
      return res.status(401).json({ success: false, isAdmin: false });
    }

    // Fetch user from Clerk
    const user = await clerkClient.users.getUser(userId);

    const isAdmin = user.privateMetadata?.isAdmin === true;

    return res.json({
      success: true,
      isAdmin
    });
  } catch (error) {
    console.error("Error checking admin:", error);
    return res.status(500).json({ success: false, isAdmin: false });
  }
});

module.exports = router;