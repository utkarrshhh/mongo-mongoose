const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const User = require("./models/userModels");
mongoose.connect("mongodb://localhost:27017/new_Db");
console.log("a");

app.use(cors());
//   const user = new User({ name: "utkaasaa", age: 1234 });
//   await user.save();
run();

async function run() {
  await User.deleteMany({}, {});

  const user = await User.create({
    name: "kyle",
    age: 242,
    hobbies: ["cricket", "music"],
    address: {
      street: "main street",
    },
  });
  console.log(user);
}

app.get("/", async (req, res) => {
  const userDetails = await User.find();
  console.log(userDetails);
  res.send(userDetails);
});

app.listen(8080, () => {
  console.log("connected");
});
