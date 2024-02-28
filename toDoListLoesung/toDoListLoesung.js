const http = require('http');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');

let newItem;
let items = [];

const server = http.createServer(route);

server.listen(8080, () => {
    console.log(`Server listening to Port 8080`);
});

function route(req, res) {

  if (req.url === '/' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'index.html'); 
    // Lese das HTML-Formular und sende es als Antwort
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.log('Datei konnte nicht gelesen werden');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);

        // Rendere die ToDo-Liste als ungeordnete Liste
        res.write('<ul>');
        items.forEach((item) => {
          res.write(`<li>${item}</li>`);
        });
        res.write('</ul>');

        res.end();
      }
    });
  } 
  
  if (req.method === 'POST' && req.url === '/') {
    // Verarbeite das Formular und aktualisiere die ToDo-Liste
    let body = '';
 
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
       
    req.on('end', () => {
      const parsedBody = qs.parse(body);
     
      newItem = parsedBody.newItem;

      if (!newItem) {
        items = [];
      }else{
        items.push(newItem);
      }
      // Nach dem Hinzufügen eines Elements leite auf die Startseite um
      res.writeHead(302, { 'Location': '/' });
      res.end();
    });
  } 
}


