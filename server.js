const http = require('http');

const server = http.createServer((req, res) => {

    console.log('I am Anand')

});

server.listen(3000);