const http = require('http')

const server = http.createServer((req, res) => {
    console.log
    res.write('A')
    res.end()
})

server.listen(5000)