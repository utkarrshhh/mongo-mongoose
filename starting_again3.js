const mongoose = require("mongoose");

main();
async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/randoms");
    console.log("conected");
  } catch (e) {
    console.log(e.message);
  }
}

const schema = new mongoose.Schema({
  name: { type: String, default: "filed", maxLength: 5 },
  age: { type: Number },
  date: { type: Date, default: Date.now() },
  job: { type: String, enum: ["sde", "intern"] },
  id: mongoose.Schema.Types.ObjectId,
});
const random = mongoose.model("random", schema);

create();
async function create() {
  await random.deleteMany({}, {});
  const user = await random.insertMany([
    { name: "rahu", age: 12 },
    { name: "roshn", age: 12334, job: "sde" },
    { name: "unkn", age: 123 },
  ]);

  const stdFind = await random.find({ age: { $gt: 100, $lt: 200 } });
  //   console.log(user);
  console.log("using find method only \n" + stdFind);
  await random.findOneAndUpdate(
    { name: "unkn" },
    { name: "utka" },
    { overwrite: true }
  );
}
