const mongoose = require('mongoose')

const StatSchema = new mongoose.Schema({
  userId: String,
  id: mongoose.Schema.Types.ObjectId,
  exercises: []
})

module.exports = mongoose.model('Stat', StatSchema)
