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

passport.serializeUser(function(user, done) {
  done(null, user._id)
 })
 
 
 passport.deserializeUser(function(id, done) {
   User.findById(id, (err, user) => {
     done(null, user)
   })
 })