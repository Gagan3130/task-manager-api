const taskArray = require("../data");
const { NotFoundError } = require("../utils/custom-error");
const errorCodes = require("../utils/error-codes");

const taskCheckMiddleware = (req, res, next) => {
  const { taskId } = req.params;
  const taskObj = taskArray.find((item) => item.id === taskId);
  if (!taskObj) {
    throw new NotFoundError({
      message: "Task does not exist",
      code: errorCodes.TASK_NOT_FOUND,
    });
  }
  next();
};

module.exports = {
  taskCheckMiddleware,
};
