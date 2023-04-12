const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.use(express.json());

router.put("/favoritescomics", async (req, res) => {
  try {
    const user = await User.findById(req.query._id);
    // console.log(user);
    if (user.comicFavorites.indexOf(req.body._id) === -1) {
      user.comicFavorites.push(req.body._id);
      await user.save();
      res.status(200).json(user.comicFavorites);
      console.log(user.comicFavorites);
    } else {
      res.status(400).json("Favoris déja existant");
      // console.log(user.comicFavorites);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/favoritescharacters", async (req, res) => {
  try {
    const user = await User.findById(req.query._id);
    if (user.characterFavorites.indexOf(req.body._id) === -1) {
      user.characterFavorites.push(req.body._id);
      await user.save();
      res.status(200).json(user.characterFavorites);
    } else {
      res.status(400).json("Favoris déjà existant");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
