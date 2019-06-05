const mongoose = require('mongoose')

const SchemaTasks = new mongoose.Schema({
  tarefa: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  creatAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('task', SchemaTasks)
