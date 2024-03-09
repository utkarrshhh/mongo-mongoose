const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./models/userModels");
mongoose.connect("mongodb://localhost:27017/new_Db");
// console.log("a");

app.use(cors());

run();

async function run() {
  await User.deleteMany({}, {});
  try {
    const user = await User.create({
      name: "kyle",
      age: 240,
      hobbies: ["cricket", "music"],
      address: {
        street: "main street",
      },
    });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

app.get("/", async (req, res) => {
  const userDetails = await User.find();
  console.log(userDetails);
  res.send(userDetails);
});

app.listen(8080, () => {
  console.log("connected");
});
