// Einbinden des http-Moduls & querystring Moduls
const http = require('http');                               
const query = require('querystring');                       

const server = http.createServer(route)

function route(req, res){
    
    const url = req.url;
    const method = req.method;
                                                            
    
    // Formular mit input Feld soll angezeigt werden
    if(url === '/'){                                                                                     
        res.write('<html>');
        res.write('<head><title>Enter Name</title></head>');
        res.write(`<body><form action="/helloFormular" method="post">
                    <p>Please enter your name</p>
                    <input type ="text" placeholder="name" name="username">
                    <button type="submit">Send</button>
                    <button type="reset">Reset</button>
                    </form></body></html>`)

  
        return res.end();
    }

     // Überprüfe, ob die URL '/helloFormular' ist und die HTTP-Methode 'POST' ist
     if( url === '/helloFormular' && method === 'POST'){                
        let body = '';
   

        // Event-Listener für das 'data'-Event hinzufügen
        req.on('data', (chunks) => {   
            
            // Füge jeden empfangenen Datenchunk zur 'body'-Zeichenkette hinzu
            body += chunks.toString();                                   
        });

        req.on('end', () => {

            // parsen der Daten mit dem 'querystring'-Modul
            const parsedBody = query.parse(body);                                  
            console.log(parsedBody)
   
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Enter Name</title></head>');
            res.write(`<body><p>hello ${parsedBody.username} </p></body></html>`);  //username wird ausgegeben
        
            res.end();
        })  
    }
   
}

server.listen(8080, () => { console.log('Server is listening to Port 8080')});

