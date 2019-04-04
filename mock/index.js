const express = require('express')
const app = express()

app.get('/api', function (req, res) {
  res.json(require('./data.json'))
})
app.get('/api/user', function (req, res) {
  res.json(require('./user.json'))
})

// 监听8081端口
app.listen('8081', function () {
  console.log('mock server start in port 8081')
})