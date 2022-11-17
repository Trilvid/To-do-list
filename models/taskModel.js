const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A task must have a title'],
      unique: true,
      trim: true,
      maxlength: [40, 'This task must have less or equal then 40 characters'],
      minlength: [10, 'This task must have more or equal then 10 characters']
    },
    description: {
      type: String,
      require: [true, "this task should have a description...."]
    },
    timeStamp: {
      type: Date,
      default: Date.now()
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
