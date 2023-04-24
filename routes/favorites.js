const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.use(express.json());

router.put("/favorites/comics/:comicId", async (req, res) => {
  try {
    const comicId = req.params.comicId;
    const user = await User.findById(req.user.id);
    const userComicFavorites = user.comicFavorites;

    if (userComicFavorites.includes(comicId)) {
      return res
        .status(409)
        .json({ message: `Le comic ${comicId} est déjà dans les favoris` });
    }

    userComicFavorites.push(comicId);

    await user.save();
    res.status(200).json(userComicFavorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/favorites/characters/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    const user = await User.findById(req.user.id);
    const userCharacterFavorites = user.characterFavorites;

    if (userCharacterFavorites.includes(characterId)) {
      return res
        .status(409)
        .json({
          message: `Le personnage ${characterId} est déjà dans les favoris`,
        });
    }

    userCharacterFavorites.push(characterId);

    await user.save();

    res.status(200).json(userCharacterFavorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
