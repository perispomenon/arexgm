const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/arexgm', { useNewUrlParser: true })

const conn = mongoose.connection
conn.once('connected', () => { console.log('connected to db') })

module.exports = conn
