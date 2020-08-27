const http = require('http');

const app = require('./app');

const port = process.env.PORT || 3000;

const hostname = "localhost";

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});