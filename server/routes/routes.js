var path= require('path');

var bodyParser= require('body-parser');

module.exports=function(app,express){
    //traduzione del body
    app.use(bodyParser.json());

    //ROTTA PER GLI UTENTI
    app.use("/utenti", require("./../risorse/utenti"));

    //ROTTA PER LE RICETTE
    app.use("/ricette", require("./../risorse/ricette"));



}