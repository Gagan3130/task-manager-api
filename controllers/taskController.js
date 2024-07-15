const { v4: uuidv4 } = require("uuid");
const { ValidationError } = require("../utils/custom-error");
const errorCodes = require("../utils/error-codes");
const taskArray = require("../data");

const priorityArray = ["low", "medium", "high"];

const registerNewTask = (req, res) => {
  const { title, description, priority = "low", completed = false } = req.body;
  const taskObj = {
    id: uuidv4(),
    title: title,
    description: description,
    completed: completed,
    priority: priority,
    createdAt: Date.now(),
    updateAt: Date.now(),
  };

  taskArray.push(taskObj);
  res.status(201).json(taskObj);
};

const getAllTask = (req, res) => {
  const { completed, sortBy = "asc" } = req.query;
  let filteredArr = [...taskArray];

  if (sortBy === "desc") {
    filteredArr = filteredArr.sort((a, b) =>  b.createdAt - a.createdAt);
  }

  if (completed) {
    filteredArr = filteredArr.filter((item) => String(item.completed) === completed);
  }

  res.status(200).json({
    count: filteredArr.length,
    tasks: filteredArr,
  });
};

const getTask = (req, res) => {
  const { taskId } = req.params;
  const taskExist = taskArray.find((item) => item.id === taskId);
  res.status(200).json(taskExist);
};

const updateTask = (req, res) => {
  const { taskId } = req.params;
  const { title, description, completed, priority } = req.body;
  taskArray.forEach((item) => {
    if (item.id === taskId) {
      (item.title = title || item.title),
        (item.description = description || item.description),
        (item.completed = completed || item.completed),
        (item.priority = priority || item.priority),
        (item.updateAt = Date.now());
    }
  });
  res.status(200).json(taskArray.find((item) => item.id === taskId));
};

const deleteTask = (req, res) => {
  const { taskId } = req.params;
  const taskIndex = taskArray.findIndex((item) => item.id === taskId);
  taskArray.splice(taskIndex, 1);
  res.status(200).json({
    count: taskArray.length,
    tasks: taskArray,
  });
};

const getTaskByPriority = (req, res) => {
  const { level = "low" } = req.params;
  if (!priorityArray.includes(level)) {
    throw new ValidationError({
      message: "Invalid Priority Value. Priority can be low, medium or high",
      code: errorCodes.INVALID_FIELDS,
    });
  }
  const listByPriority = taskArray.filter((item) => item.priority === level);
  res.status(200).json({
    count: listByPriority.length,
    tasks: listByPriority,
  });
};

module.exports = {
  registerNewTask,
  getAllTask,
  getTask,
  updateTask,
  deleteTask,
  getTaskByPriority,
};
