const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello world, This is my Node.js server');
}

const server = http.createServer(requestListener);
let port = 10000;
server.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
