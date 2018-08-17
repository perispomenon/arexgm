const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../db/models/User')

passport.use(new LocalStrategy({ usernameField: 'login' }, (login, password, done) => {
    User.findOne({ login }, (err, user) => {
      if (err) { return done(err) }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' })
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' })
      }
      return done(null, user)
    })
  }
))
