const Router = require('express').Router()
const User = require('../db/models/User')
const State = require('../db/models/Stat')
const passport = require('passport')

function authenticationMiddleware () {
  return function (req, res, next) {
      if (req.isAuthenticated()) {
          return next()
      }
      res.redirect('/')
  }
}

Router.post('/user/register', async (req, res) => {
  const userCheck = await User.where({ login: req.body.login }).findOne()
  if (userCheck) {
    res.json({ err: 'This login is unavailable' })
  } else {
    const user = new User({
      login: req.body.login,
      password: req.body.password,
      email: req.body.email
    })
    await user.save()
    res.json({ result: 1 })
  }
})

Router.post('/user/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) {
      res.json(info)
    } else {
      res.json(user)
    }
  })(req, res, next)
})

Router.get('/user/:id', (req, res) => {
  console.log(req.body)
  res.end()
})

Router.put('/exercises', (req, res) => {
  console.log(req.body)
  res.end()
})

Router.get('/exercises/:id', (req, res) => {
  console.log(req.body)
  res.end()
})

module.exports = Router
