const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");
require("dotenv").config();

// ✅ Clerk
const { clerkMiddleware } = require("@clerk/express");

// Connect DB
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Apply Clerk middleware globally
app.use(clerkMiddleware({
  secretKey: process.env.CLERK_SECRET_KEY,
}));

// ✅ Routes
app.use("/api/certificates", require("./routes/certificateRoutes"));
app.use("/api/admin", require("./routes/Admin")); // 👈 Admin routes

app.get("/", (req, res) => {
  res.send("Hello World! Backend is running 🚀");
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});