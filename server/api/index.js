const Router = require('express').Router()

  // TODO do smth
Router.post('user/register', (req, res) => {
  console.log(req.body)
  res.end()
})

Router.post('user/login', (req, res) => {
  console.log(req.body)
  res.json({ result: 1 })
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
