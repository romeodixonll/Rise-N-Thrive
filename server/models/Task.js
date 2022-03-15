const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  taskItem: {
    type: String,
    required: true,
    trim: true,
    default:'Double Click to Edit'
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Task = model("Task", taskSchema, "Task");

module.exports = Task;
