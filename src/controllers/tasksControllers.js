const Tasks = require("../models/tasks");

class TaskControllers {
  async start(req, res) {
    const task = await Tasks.find();
    res.render("form", { task });
  }
  async store(req, res) {
    const task = await Tasks.create(req.body);
    res.redirect("/add");
    return res.json(task);
  }
  async update(req, res) {
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.redirect("/add");
  }
  async delete(req, res) {
    await Tasks.findByIdAndDelete(req.params.id);
    return res.json({ mensage: "deleted" });
  }
  async list(req, res) {
    const task = await Tasks.find();
    return res.json(task);
  }
  async show(req, res) {
    const task = await Tasks.findById(req.params.id);
    return res.json(task);
  }
}

module.exports = new TaskControllers();
