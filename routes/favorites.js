const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.use(express.json());

router.get("/users/:userId/favorites/comics", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ message: `L'utilisateur ${userId} n'existe pas` });
    }

    res.status(200).json(user.comicFavorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/users/:userId/favorites/comics/:comicId", async (req, res) => {
  try {
    const comicId = req.params.comicId;
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ message: `L'utilisateur ${userId} n'existe pas` });
    }

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

router.delete("/users/:userId/favorites/comics/:comicId", async (req, res) => {
  try {
    const comicId = req.params.comicId;
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ message: `L'utilisateur ${userId} n'existe pas` });
    }

    const userComicFavorites = user.comicFavorites;

    if (!userComicFavorites.includes(comicId)) {
      return res
        .status(404)
        .json({ message: `Le comic ${comicId} n'est pas dans les favoris` });
    }

    const index = userComicFavorites.indexOf(comicId);
    userComicFavorites.splice(index, 1);

    await user.save();
    res.status(200).json(userComicFavorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/users/:userId/favorites/characters", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ message: `L'utilisateur ${userId} n'existe pas` });
    }

    res.status(200).json(user.characterFavorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put(
  "/users/:userId/favorites/characters/:characterId",
  async (req, res) => {
    try {
      const userId = req.params.userId;
      const characterId = req.params.characterId;
      const user = await User.findById(userId);

      if (!user) {
        return res
          .status(404)
          .json({ message: `L'utilisateur ${userId} n'existe pas` });
      }

      const userCharacterFavorites = user.characterFavorites;

      if (userCharacterFavorites.includes(characterId)) {
        return res.status(409).json({
          message: `Le personnage ${characterId} est déjà dans les favoris`,
        });
      }

      userCharacterFavorites.push(characterId);

      await user.save();

      res.status(200).json(userCharacterFavorites);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

router.delete(
  "/users/:userId/favorites/characters/:characterId",
  async (req, res) => {
    try {
      const userId = req.params.userId;
      const characterId = req.params.characterId;
      const user = await User.findById(userId);

      if (!user) {
        return res
          .status(404)
          .json({ message: `L'utilisateur ${userId} n'existe pas` });
      }

      const userCharacterFavorites = user.characterFavorites;

      if (!userCharacterFavorites.includes(characterId)) {
        return res.status(404).json({
          message: `Le personnage ${characterId} n'est pas dans les favoris`,
        });
      }

      const index = userCharacterFavorites.indexOf(characterId);
      userCharacterFavorites.splice(index, 1);

      await user.save();

      res.status(200).json(userCharacterFavorites);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

module.exports = router;
