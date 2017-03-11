var express= require('express');
var router= express.Router();
var Utenti= require ('./utenti.controller.js');

router.get('/', Utenti.getUtenti);


router.post('/', Utenti.creaUtente);


module.exports=router;