const http  = require('http');
const myserver =http.createServer((req, res) => {
    console.log('server1');
    res.end('HI this is my first server');
});
myserver.listen(8000, () => console.log('server is running on port 3000'));