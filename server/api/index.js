const Router = require('express').Router()
const User = require('../db/models/User')
const Stat = require('../db/models/Stat')
const passport = require('passport')
const moment = require('moment')

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
      req.logIn(user, err => {
        if (err) next(err)
        res.json(user)
      })
    }
  })(req, res, next)
})

Router.post('/user/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    req.logOut()
    res.end()
  })
})

Router.get('/user', async (req, res) => {
  const profile = await User.findById(req.user._id)
  res.json(profile)
})

Router.put('/user', async (req, res) => {
  const $set = {
    city: req.body.city,
    email: req.body.email
  }
  if (req.body.password) {
    $set.password = req.body.password
  }
  const upd = await User.update({ _id: req.user._id}, { $set })
  if (!upd) {
    res.end(400)
  } else {
    res.json({ result: 1 })
  }
})

Router.put('/exercises', async (req, res) => {
  const stat = new Stat({
    userId: req.user._id,
    time: req.body.time,
    exercises: req.body.exercises
  })
  await stat.save()
  res.end()
})

Router.get('/exercises', async (req, res) => {
  const stats = await Stat.where({ userId: req.user._id }).find()
  stats.map(s => {
    s.time = moment(s.time).format('LLLL')
    console.log(s.time)
    return s
  })
  res.json(stats)
})

module.exports = Router
