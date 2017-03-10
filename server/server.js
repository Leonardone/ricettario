var express = require('express');
var app= express();

const PORT=3000;

//IMPORTO IL FILE DI CONFIGURAZIONE PER IL DB
require("./config/database.js"); //mi collego al js della connessione al db mongo

require("./routes/routes.js")(app, express); //mi collego alle rotte per dove va a pescare i file






//START DEL SERVER
app.listen(PORT, function(){
    console.log("listening on http://localhost:"+PORT);
})