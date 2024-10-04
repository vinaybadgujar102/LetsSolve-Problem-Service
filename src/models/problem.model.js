const mongoose = require("mongoose");
const { Schema } = mongoose;

const problemSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  diffiulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "Difficulty is required"],
    default: "easy",
  },
  testCases: [
    {
      input: {
        type: String,
        required: [true, "Test Case input is required"],
      },
      output: {
        type: String,
        required: [true, "Test Case output is required"],
      },
    },
  ],
  editorial: {
    type: String,
  },
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
