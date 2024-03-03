const express = require("express");
const mongoose = require("mongoose");
const app = express();
const uri =
  "mongodb+srv://utkarsh3639:Utkarsh007@cluster3639.4i3m8w7.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster3639";
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to the db");
  })
  .catch((e) => console.log(e));

const schema = new mongoose.Schema({
  name: String,
  age: Number,
});

const employee = mongoose.model("employee", schema);

app.get("/", async (req, res) => {
  try {
    console.log("here");
    const employees = await employee.find();
    console.log("here again");
    console.log(employees);
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(8080, () => {
  console.log("server is running");
});
