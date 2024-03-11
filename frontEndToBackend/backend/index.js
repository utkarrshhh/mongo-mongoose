const express = require("express");
const app = express();
const mongoose = require("mongoose");

// mongoose.connect("http://localhost:27017/todo");
var schema = {};
var hoo;
var data = {};
main();

async function main() {
  await mongoose.connect("mongodb://localhost:27017/todo");
  console.log("connected to database");
  schema = mongoose.Schema({ name: String, age: Number });
  hoo = mongoose.model("hoo", schema);
}

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.post("/", (req, res) => {
  console.log(req.body); // Log the request body
  data = req.body;
  console.log(data);
  res.send(data);
  //   res.send(req.body);
});
app.get("/", async (req, res) => {
  const total = await getData();
  create();
  res.send(total);
});

async function getData() {
  const total = await hoo.find({});
  console.log(total);
  return total;
}

async function create() {
  const user = await new hoo({ name: data.name, age: data.roll });
  await user.save();
}

app.listen(3000, () => {
  console.log("Server running ");
});
