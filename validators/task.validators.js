const { body, query, checkExact } = require("express-validator");

const createTaskValidator = checkExact([
  body("title").notEmpty().isString().withMessage("Invalid title vlaue"),
  body("description")
    .notEmpty()
    .withMessage("Invalid description value")
    .isString(),
  body("priority")
    .optional()
    .isString()
    .isIn(["low", "medium", "high"])
    .withMessage("Invalid Priority Value. Priority can be low, medium or high"),
  body("completed")
    .optional()
    .isBoolean({ strict: true })
    .withMessage("Completed flag must be boolean"),
]);

const checktaskQueryValidators = checkExact([
  query("completed")
    .optional()
    .isBoolean()
    .withMessage("completed param must be boolean value"),
  query("sortBy")
    .optional()
    .isString()
    .isIn(["asc", "desc"])
    .withMessage("sortBy can be either asc or desc"),
]);

const updateTaskValidator = checkExact([
  body("title")
    .optional()
    .isString()
    .withMessage("Invalid title vlaue")
    .isLength({ min: 1 }),
  body("description")
    .optional()
    .isLength({ min: 1 })
    .isString()
    .withMessage("Invalid description value"),
  body("priority")
    .optional()
    .isString()
    .isIn(["low", "medium", "high"])
    .withMessage("Invalid Priority Value. Priority can be low, medium or high"),
  body("completed")
    .optional()
    .isBoolean({ strict: true })
    .withMessage("Completed flag must be boolean"),
]);

module.exports = {
  createTaskValidator,
  checktaskQueryValidators,
  updateTaskValidator,
};
