const express = require("express");
const router = express.Router();
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");
const User = require("../models/User");
router.use(express.json());

router.post("/user/signup", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ username: req.body.username });

    if (user) {
      res.status(409).json({ message: "This username is already used" });
    } else {
      if (req.body.username && req.body.password) {
        const token = uid2(64);
        const salt = uid2(64);
        const hash = SHA256(req.body.password + salt).toString(encBase64);

        const newUser = new User({
          username: req.body.username,
          token: token,
          hash: hash,
          salt: salt,
        });

        await newUser.save();
        res.status(200).json({ message: "account created" });
      } else {
        res.status(400).json({ message: "missing parameters" });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
