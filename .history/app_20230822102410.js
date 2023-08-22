const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url === '/') {
        res.end('AA')

    }
   
})

server.listen(5000)