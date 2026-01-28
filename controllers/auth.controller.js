const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.redirect("/api/auth/register?error=All fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.redirect("/api/auth/register?error=User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role // ✅ coming from frontend
    });

    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000
    });

    res.redirect("/profile");

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};



exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.redirect("/api/auth/login?error=All fields are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.redirect("/api/auth/login?error=Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.redirect("/api/auth/login?error=Invalid credentials");
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000
    });

    res.redirect("/profile");

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};


exports.logoutUser = (req, res) => {
  res.clearCookie("token");
  res.redirect("/api/auth/login");
};
