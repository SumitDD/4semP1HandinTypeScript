const http = require('http');
const osObj = require('./osInfo')
const DOS_Detector = require('./dosDetector')
const detector = new DOS_Detector(3000)

const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    detector.addUrl(req.url)
    res.setHeader('Content-Type', 'application/json');
    res.write(`Os-info: ${JSON.stringify(osObj)}`);
    return res.end();
  }
  if (req.url === '/') {
    detector.addUrl(req.url)
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

