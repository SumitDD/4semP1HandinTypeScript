const http = require('http');
const ex1b = require('./exercise1b')



const server = http.createServer((req, res) => {
  if (req.url === '/api/securerandoms') {
    res.setHeader('Content-Type', 'application/json');
    res.write('sumit dey')
    ex1b.makeSecureRandomList([10, 20, 30, 40, 50, 60]).then(data =>{
        res.write(JSON.stringify(data))
    })
    setTimeout(()=>{
        res.end();
    }, 3000)
    
  }
  if (req.url === '/') {
    
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }

});
server.on('connection', (sock) => {
    console.log(sock.remoteAddress)

});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.

