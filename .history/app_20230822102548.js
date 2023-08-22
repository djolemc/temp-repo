const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('AA')
    }   
    if (req.url === '/about') {
        res.end('about')
    }

    res.end('')
})

server.listen(5000)