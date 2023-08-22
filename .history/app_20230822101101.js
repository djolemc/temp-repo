const http = require('http')

const server = http.createServer((req, res) => {
    res.write('A')
    res.end()
})
