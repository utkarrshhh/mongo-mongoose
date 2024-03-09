const mongoose = require("mongoose");
const User = require("./models/userModels");
mongoose.connect("mongodb://localhost:27017/new_Db");

run();

async function run() {
  try {
    const user = await User.where("name")
      .equals("kyle")
      .populate("bestFriend")
      .limit(1);
    // console.log(user);
    // await user[0].save;
    // user[0].bestFriend = "65e9cb5f18307bfe8ec405a2";
    // await user[0].save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
