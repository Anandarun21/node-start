const http = require('http');

const server = http.createServer((req, res) => {
  
  console.log('I Am Anand');

  res.end('I Am Anand \n');
});
server.listen(4000)

