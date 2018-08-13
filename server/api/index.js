const Router = require('express').Router()
const User = require('../db/models/User')
const State = require('../db/models/Stat')

  // TODO add validation and stuff smth
Router.post('/user/register', async (req, res) => {
  console.log(req.body)
  // TODO fix db
  // const user = new User({
  //   login: req.body.login,
  //   password: req.body.password,
  //   email: req.body.email
  // })
  // await user.save()
  res.json({ result: 1 })
})

Router.post('user/login', (req, res) => {
  console.log(req.body)
  res.end()
})

Router.get('user/:id', (req, res) => {
  console.log(req.body)
  res.end()
})

Router.put('exercises', (req, res) => {
  console.log(req.body)
  res.end()
})

Router.get('exercises/:id', (req, res) => {
  console.log(req.body)
  res.end()
})

module.exports = Router
