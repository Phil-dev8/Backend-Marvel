require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const axios = require("axios");

app.get("/", (req, res) => {
  res.json(
    "✅ 🚀Server started, let's go to do perfect marvel react website🚀 ✅"
  );
});

app.get("/comics", async (req, res) => {
  try {
    const title = req.query.title || ";";
    const skip = req.query.skip || "0";
    const limit = req.query.limit || "100";
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${title}&skip=${skip}&limit=${limit}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error.response);
  }
});

app.get("/characters", async (req, res) => {
  try {
    const name = req.query.name || "";
    const skip = req.query.skip || "0";
    const limit = req.query.limit || "100";

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${name}&skip=${skip}&limit=${limit}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.response);
  }
});

app.get("/comics/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    console.log(req.params);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.response);
  }
});

app.get("/character/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.APIK_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.response);
    res.status(400).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route doesn't exist" });
});

app.listen(process.env.PORT, () => {
  console.log(
    "✅ 🚀Server started, let's go to do perfect marvel react website🚀 ✅"
  );
});
