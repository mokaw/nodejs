const express = require('express');

const app = express();

app.listen(8080, () => {
    console.log(`Server is running on Port 8080`);
})

app.get('/', (req, res) => {

    //__dirname gibt das Verzeichnis des aktuellen Skripts aus
    res.sendFile(__dirname + '/index.html');                    
})

// *** Fügt die Route '/submit-order' hinzu, parst die Daten und gibt diese als Antwort aus ***


