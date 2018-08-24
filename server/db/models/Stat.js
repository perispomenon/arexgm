const mongoose = require('mongoose')

const StatSchema = new mongoose.Schema({
  userId: String,
  id: mongoose.Schema.Types.ObjectId,
  time: Date,
  exercises: [{
    content: String,
    solvingTime: Number // in seconds
  }]
}, { timestamps: true })

module.exports = mongoose.model('Stat', StatSchema)
