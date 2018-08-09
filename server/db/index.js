const mongoose = require('mongoose');

/*const kitty = new User({ login: 'Zildjian', password: 123 });
kitty.save().then(() => console.log('meow'));*/
module.exports = {
  connect () {
    mongoose.connect('mongodb://localhost:27017/arexgm', { useNewUrlParser: true }).then(() => { console.log('connected to db') });
  }
}
