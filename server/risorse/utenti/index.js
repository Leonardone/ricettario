var express= require('express');
var router= express.Router();
var Utenti= require ('./utenti.controller.js');

router.get('/', Utenti.getUtenti);


router.post('/', Utenti.creaUtente);


router.get('/:id([0-9a-f]{24})', Utenti.dettaglioUtente);


router.get('/categoria', Utenti.ricercautentipercategoria);


module.exports=router;