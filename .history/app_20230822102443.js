const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url === '/') {
        res.end('AA')
    }   
    if (req.url === '/about') {
        
    }
})

server.listen(5000)