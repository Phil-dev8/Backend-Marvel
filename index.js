require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const charactersRoute = require("./routes/characters");
const comicsRoute = require("./routes/comics");
app.use(charactersRoute);
app.use(comicsRoute);

app.get("/", (req, res) => {
  res.json(
    "✅ 🚀Server started, let's go to do perfect marvel react website🚀 ✅"
  );
});
app.all("*", (req, res) => {
  res.status(404).json({ message: "This route doesn't exist" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "✅ 🚀Server started, let's go to do perfect marvel react website🚀 ✅"
  );
});
