const express = require("express");
const {
  getAllTask,
  getTask,
  updateTask,
  registerNewTask,
  deleteTask,
  getTaskByPriority,
} = require("../controllers/taskController");
const { taskCheckMiddleware } = require("../middlewares/task.middleware");
const {
  createTaskValidator,
  checktaskQueryValidators,
  updateTaskValidator,
} = require("../validators/task.validators");
const {
  validateRequestSchema,
} = require("../validators/validateRequestSchema");

const router = express.Router();
router
  .route("/")
  .post(createTaskValidator, validateRequestSchema, registerNewTask)
  .get(checktaskQueryValidators, validateRequestSchema, getAllTask);
router
  .route("/:taskId")
  .get(taskCheckMiddleware, getTask)
  .put(
    taskCheckMiddleware,
    updateTaskValidator,
    validateRequestSchema,
    updateTask
  )
  .delete(taskCheckMiddleware, deleteTask);
router.route("/priority/:level").get(getTaskByPriority);

module.exports = router;
