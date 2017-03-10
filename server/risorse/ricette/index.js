var express= require('express');
var router= express.Router();

var Ricette = require('./ricette.controller.js');

//ROTTE CHE  MI RESTITUISCONO LE RICETTE DAL MONDO
router.get("/", Ricette.getRicette);

module.exports=router;