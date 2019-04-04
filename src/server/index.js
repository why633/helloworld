const express = require('express')
const app = express()

app.get('/data', function (req, res) {
  res.json(require('./data.json'))
})

// 监听8081端口
app.listen('8081', function () {
  console.log('mock server start in port 8081')
})