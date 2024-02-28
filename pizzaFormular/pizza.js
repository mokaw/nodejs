const http = require('http');
const fs = require('fs');
const path = require('path');


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

    //if(){
    //      *** Ergänze die Route und füge Event-Listner hinzu, um die Daten zu parsen***
    //
    //
    //         res.write(`
    //         <html>
    //             <head>
    //                 <title>Pizza Planet order conformation</title>
    //             </head>
    //             <body>
    //                 <h1>Pizza Planet order conformation</h1>
    //                 <p>Hello, ***theName***!</p>
    //                 <p>Within the next 30 minutes, you will receive your
    //                 ***theSize*** pizza with
    //                 ${parsedBody.tomato ? 'Tomato, ' : ''} ***toppings...***
    //                 and our famous cheesy crust.</p>
    //             </body>
    //         </html>
    //     `);
    // }
}



server.listen(8080, () => {
    console.log(`Server listening to Port 8080`);
});