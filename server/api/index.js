const Router = require('express').Router()

Router.post('/user/register', (req, res) => {
  // TODO do smth
  console.log(req.body)
  res.end()
})

module.exports = Router
