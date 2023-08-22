const http = require('http')

const server = http.createServer((req, res) => {
    res.writableHighWaterMark('A')
})

server.listen(5000)