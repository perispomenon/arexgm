const Router = require('express').Router()

Router.post('/user/register', (req, res) => {
  console.log(req.body)
  res.end()
})

module.exports = Router
