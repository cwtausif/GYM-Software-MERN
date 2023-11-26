// backend/routes/authRoutes.js

const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "Email is already registered. Please choose a different email.",
      });
    }

    const user = new User({ name, email });
    await user.setPassword(password);
    await user.save();

    // Generate and send an access token upon successful registration
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Registration successful", user, accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error registering user" });
  }
});

// Login route
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Passport authentication error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    if (!user) {
      console.error("Authentication failed:", info.message);
      return res.status(401).json({ error: info.message });
    }

    // Authentication successful, generate and send access token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10000h" }
    );
    res.json({ message: "Login successful", user, accessToken });
  })(req, res, next);
});

// Logout route
router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Logout successful" });
});

module.exports = router;
