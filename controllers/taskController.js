const Task = require('./../models/taskModel');

exports.getAlltask = async (req, res) => {
  try{
    const task = await Task.find();
  
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: task.length,
      task
    });
  }
  catch (err) {
      res.status(500).json({
          status: "failed",
          message: err.message
      })
  }
  };

  exports.createTask = async (req, res) => {
    try{
        const newTask = await Task.create({
          title:req.body.title,
          description: req.body.description,
          timeStamp: req.body.timeStamp
        });

        res.status(201).json({
          status: 'success',
          task: newTask
        });
    }
    catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
  }

  exports.updateTask = async (req, res) => {
    try{
      const task = await Task.findByIdAndUpdate(req.params.id, req.body);

      if (!task) {
        res.send({
          status: "failed",
          message: "no task with that ID found"
        });
      }

      res.status(200).json({
        status: "success",
        task
      });
    }
    catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
  }

  exports.deleteTask = async (req, res) => {
    try{
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      res.send({
        status: "failed",
        message: "no task with that ID found"
      });
      return true
    }
  
    res.status(204).json({
      status: 'success',
      data: null
    });

    }
    catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
  }