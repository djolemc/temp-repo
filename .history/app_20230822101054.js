const http = require('http')

const server = http.createServer((req, res) => {
    res.write('A')
    
})

server.listen(5000)