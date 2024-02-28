// *** Füge hier die Module ein ***

// *** Erstelle die Variablen Items[] und newItem ***

// *** Erstelle einen Webserver und eine Route und überprüfe dabei, ob es sich bei der Anfrage um eine GET-Methode handelt***

   


    // *** Gebe als req Antwort die index.html und folgende Liste aus: ***
        
    // Rendert die ToDo-Liste als ungeordnete Liste
        res.write('<ul>');
        items.forEach((item) => {
          res.write(`<li>${item}</li>`);
        });
        res.write('</ul>');




// *** Erstelle hier die Route für die POST Methode. ***
    
    // *** Füge Event-Listener hinzu, um die Daten zu parsen ***

    // *** Speichere die Daten in newItem und pushe dieses in das Items[] ***

    // *** Führe ein redirect auf den Pfad '/' aus ***
      


