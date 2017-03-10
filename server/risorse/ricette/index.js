var express= require('express');
var router= express.Router();

var Ricette = require('./ricette.controller.js');

//ROTTE CHE  MI RESTITUISCONO LE RICETTE DAL MONDO
router.get("/", Ricette.getRicette);
//ROTTE CHE  MI RESTITUISCONO una ricetta
router.get("/:id", Ricette.dettaglioRicetta);
//ROTTE CHE  MI creano una ricetta
router.post("/", Ricette.creaRicetta);

module.exports=router;