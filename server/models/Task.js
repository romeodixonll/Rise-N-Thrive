const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  taskItem: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Task = model("Task", taskSchema, "Task");

module.exports = Task;
