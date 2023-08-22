const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('AA')
    }   
    if (req.url === '/about') {
        res.end('about')
    }

    res.end(`
    <h1>Oops!</h1>
    `)
})

server.listen(5000)