const app = require("express")();
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://utkarsh3639:Utkarsh007@cluster3639.4i3m8w7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3639";

mongoose.connect(uri);

const User = require("./models/userModels");
app.get("/", (req, res) => {
  res.end("hello");
});

app.listen(8080, () => {
  console.log("server is running");
});
