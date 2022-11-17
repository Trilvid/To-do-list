const express = require('express');
const taskController = require('./../controllers/taskController');

const router = express.Router();

router
  .route('/')
  .get(taskController.getAlltask)
  .post(taskController.createTask);

router
  .route('/:id')
  // .get(taskController.gettask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;
