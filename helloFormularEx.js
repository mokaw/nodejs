//Importiere das Express-Framework und Middleware
const express = require('express');                                     
const bodyParser = require('body-parser');                             

//Erstellen einer Express-App
const app = express();                                               
const PORT =  process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on Port 8080`);
});

//parst Daten aus dem Request Body
app.use(bodyParser.urlencoded({ extended: false }));                    

app.get('/', (req, res) => {
    
    // Formular mit input Feld soll angezeigt werden
    res.send(`
        <html>
            <head><title>Enter Name</title></head>
            <body>
                <form action="/helloFormular" method="post">
                    <p>Please enter your name</p>
                    <input type="text" placeholder="name" name="username">
                    <button type="submit">Send</button>
                    <button type="reset">Reset</button>
                </form>
            </body>
        </html>
    `);
});

app.post('/helloFormular', (req, res) => {

    //geparster Request Body wird in parsedBody gespeichert
    const parsedBody = req.body;                                       

    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <html>
            <head><title>Enter Name</title></head>
            <body>
                <p>hello ${parsedBody.username}</p>
            </body>
        </html>
    `);
});

