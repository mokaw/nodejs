const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(8080, () => {
    console.log(`Server is running on Port 8080`);
})

// Middleware zum Parsen der Daten
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {

    //__dirname gibt das Verzeichnis des aktuellen Skripts aus
    res.sendFile(__dirname + '/index.html');                        
})

app.post('/submit-order', (req,res) => {

    // Abrufen der Daten aus dem Requestbody --> wird in parsedBody gespeichert
    const parsedBody = req.body;

    res.setHeader('Content-Type', 'text/html');

    // Daten werden als HTMl Text ausgegeben
    res.send( 
    `<html>
        <head>
            <title>Pizza Planet order conformation</title>
        </head>
        <body>
            <h1>Pizza Planet order conformation</h1>
            <p>Hello, ${parsedBody.theName}!</p>
            <p>Within the next 30 minutes, you will receive your
             ${parsedBody.theSize} pizza with
             ${parsedBody.tomato ? 'Tomato, ' : ''}${parsedBody.cheese ? 'Cheese, ' : ''}
             ${parsedBody.peperoni ? 'Peperoni, ' : ''}${parsedBody.sausage ? 'Sausage, ' : ''}
             ${parsedBody.tuna ? 'Tuna' : ''}
             and our famous cheesy crust.</p>
        </body>
    </html>`)
})

