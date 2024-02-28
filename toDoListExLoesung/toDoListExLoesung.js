// Hinzufügen der Module
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Erstellen einer express-App
const app = express();

let items;


app.listen(8080, () => {
    console.log(`Server listening to Port 8080`);
  });

// Verwendung von Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));


//Erstellen der Routen

app.get('/', (req, res) => {
  
  // Holen der ToDo-Liste aus der Session oder initialisieren
  if(!items){
    items = [];
  }else{
    items = req.session.items
  }
  

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
      }
    })
});

app.post('/', (req, res) => {
  // Verarbeiten des Formulars und Aktualisieren der ToDo-Liste
  const newItem = req.body.newItem;

  if (newItem) {
    // Initialisere 'req.session.items' mit einem leeres Array, wenn es noch nicht definiert wurde.
    if (!req.session.items) {
      req.session.items = [];
    }

   
    req.session.items.push(newItem);
  }

  // Nach dem Hinzufügen eines Elements leite auf die Startseite um
  res.redirect('/');

});

