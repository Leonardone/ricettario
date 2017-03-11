var express= require('express');
var router= express.Router();

var Ricette = require('./ricette.controller.js');

//ROTTE CHE  MI RESTITUISCONO LE RICETTE DAL MONDO
router.get("/", Ricette.getRicette);


//ROTTE CHE  MI RESTITUISCONO una ricetta
router.get("/:id([0-9a-f]{24})", Ricette.dettaglioRicetta);


//ROTTE CHE  MI creano una ricetta
router.post("/", Ricette.creaRicetta);


//rotte che mi cancellano una ricetta
router.delete("/:id([0-9a-f]{24})", Ricette.deleteRicetta);


//Rotte che mi cercano per ingrediente
router.get("/cerca", Ricette.cercaPerIngrediente);

router.get("/cercaing", Ricette.cercaPercategoria);


router.put("/:id([0-9a-f]{24})", Ricette.votaRicetta);

router.put("/commento/:id([0-9a-f]{24})", Ricette.commentaRicetta);





module.exports=router;