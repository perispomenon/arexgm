const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  login: String,
  password: String,
  email: String,
  id: mongoose.Schema.Types.ObjectId,
  city: String
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)
