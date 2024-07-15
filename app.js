const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const { ValidationError, NotFoundError } = require("./utils/custom-error");
const errorCodes = require("./utils/error-codes");
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/tasks", taskRoutes);

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(400).json({ error: err.message, code: err.code });
  } else if (err instanceof NotFoundError) {
    res.status(404).json({ error: err.message, code: err.code });
  } else {
    console.log(err, "error");
    res.status(500).json({
      error: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});
app.use("*", function (req, res) {
  res
    .status(404)
    .json({ error: "Route does not Exist", code: errorCodes.ROUTE_NOT_FOUND });
});

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
