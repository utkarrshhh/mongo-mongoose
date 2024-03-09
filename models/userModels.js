const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: { type: String, required: true },
  age: {
    type: Number,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: String,
  cretaedAt: { type: Date, default: new Date() },
  updatedAt: Date,
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("User", schema);

// in validations we can also set lowercase validatino or upper case validation default min and max number
// if we want to set a custome validator we can do that by simply initializig a validator object

// for eg validate:{validator : v=> v%2===0}
// and we can use message : props => `$props.value` is not an even number here props denote the key in which this is a value such as if we add this in age as follows above
