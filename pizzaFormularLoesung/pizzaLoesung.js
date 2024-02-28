const http = require('http');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');

const server = http.createServer(route)

function route(req, res){
    
    if (req.url === '/') {

        // path.join erstellt vollständigen Pfad
        const filePath = path.join(__dirname, 'index.html');                     

        // Datei wird mit Hilfe des fs-Moduls gelesen
        fs.readFile(filePath, 'utf8', (err, data) => {                          
            if (err) {
                console.log('Datei konnte nicht gelesen werden');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });

                // Dateiinhalt wird als Antwort ausgegeben
                res.write(data);                                                
                res.end();
            }
        });
    } 
    
    if (req.method === 'POST' && req.url === '/submit-order') {
        let body = '';
    
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
    
        req.on('end', () => {
            const parsedBody = qs.parse(body);
      
            // Setze den Content-Type auf text/html
            res.setHeader('Content-Type', 'text/html');
    
            // Sende die HTML-Seite als Antwort
            res.write(`
            <html>
                <head>
                    <title>Pizza Planet order conformation</title>
                </head>
                <body>
                    <h1>Pizza Planet order conformation</h1>
                    <p>Hello, ${parsedBody.theName}!</p>
                    <p>Within the next 30 minutes, you will receive your
                     ${parsedBody.theSize} pizza with
                     ${parsedBody.tomato ? 'Tomato, ' : ''}${parsedBody.cheese ? 'Cheese, ' : ''}${parsedBody.peperoni ? 'Peperoni, ' : ''}${parsedBody.sausage ? 'Sausage, ' : ''}${parsedBody.tuna ? 'Tuna' : ''}
                     and our famous cheesy crust.</p>
                </body>
            </html>
        `);
            res.end();
        });
    }
}



server.listen(8080, () => {
    console.log(`Server listening to Port 8080`);
});