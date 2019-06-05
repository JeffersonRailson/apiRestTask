const express = require("express");
const TasksControllers = require("./controllers/tasksControllers");

const routes = express.Router();

routes.post("/api/tasks", TasksControllers.store);
routes.get("/api/tasks", TasksControllers.list);
routes.delete("/api/tasks/:id", TasksControllers.delete);
routes.put("/api/tasks/:id", TasksControllers.update, (req, res) => {
  console.log(req.body.done);
});

routes.get("/add", TasksControllers.start);

module.exports = routes;
