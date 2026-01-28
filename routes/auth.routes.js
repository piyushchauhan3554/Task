const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser
} = require("../controllers/auth.controller");

const authMiddleware = require("../middleware/auth");


router.get("/register", (req, res) => {
  res.render("register", { error: req.query.error });
});

router.get("/login", (req, res) => {
  res.render("login", { error: req.query.error });
});


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);


router.get("/profile", authMiddleware, (req, res) => {
  res.render("profile", { user: req.user });
});

module.exports = router;
