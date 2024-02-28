// Hinzufügen der Module
const express = require('express');                     
const path = require('path');

// Erstellen einer Express-App
const app = express();                                  

let items;                                             


app.listen(8080, () => {
    console.log(`Server listening to Port 8080`);
  });


// *** Füge hier die Middleware hinzu ***


app.get('/', (req, res) => {
  
  // Wenn items nicht definiert ist (also zu Beginn), initalisiere es mit einem leeren Array
  // Andernfalls weise ihm die items aus der Session zu.

  if(!items){
    items = [];
  }else{
    items = req.session.items
  }
  
  // *** Lese die index.html Datei und gebe sie im Browser aus ***
    const filePath = path.join(__dirname, 'index.html'); 
  
   
 
        // ***Rendere die ToDo-Liste als ungeordnete Liste und gebe diese ebenfalls im Browser aus***
        
  
});

app.post('/', (req, res) => {
  // Verarbeiten des Formulars und Aktualisieren der ToDo-Liste
  const newItem = req.body.newItem;

  if (newItem) {
    
    // Initialisere 'req.session.items' mit einem leeres Array, wenn es noch nicht definiert wurde.
    if (!req.session.items) {
      req.session.items = [];
    }

    // Füge das neue Element dem Array hinzu, falls die ToDo-Liste in der Session bereits existiert.
    req.session.items.push(newItem);
  }

  // Nach dem Hinzufügen eines Elements leite auf die Startseite um
  res.redirect('/');

});
