require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const charactersRoute = require("./routes/characters");
const comicsRoute = require("./routes/comics");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");
app.use(cors());
app.use(charactersRoute);
app.use(comicsRoute);
app.use(userRoute);

mongoose.connect(process.env.MONGODB_URI);

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
