const Router = require('express').Router()
const User = require('../db/models/User')
const Stat = require('../db/models/Stat')
const passport = require('passport')

function checkAuth () {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.end(403)
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
      email: req.body.email,
      city: req.body.city
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

Router.post('/user/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    res.end()
  })
})

Router.get('/user/:id', async (req, res) => {
  const profile = await User.findById(req.params.id)
  res.json(profile)
})

Router.put('/user/:id', async (req, res) => {
  const $set = {
    city: req.body.city,
    email: req.body.email
  }
  if (req.body.password) {
    $set.password = req.body.password
  }
  const upd = await User.update({ _id: req.params.id }, { $set })
  if (!upd) {
    res.end(400)
  } else {
    res.json({ result: 1 })
  }
})

Router.put('/exercises', (req, res) => {
  console.log(req.body)
  res.end()
})

Router.get('/exercises', (req, res) => {
  console.log(req.body)
  res.end()
})

module.exports = Router
