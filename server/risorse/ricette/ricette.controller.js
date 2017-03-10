module.exports=(function(){



            var getRicette=function(req, res){
                res.send("le ricette del mondo");

            }
               var dettaglioRicetta=function(req, res){
                res.send("dettaglio ricetta");

            }
               var creaRicetta=function(req, res){
                res.send("Nuova ricetta");

            }
            return{

                getRicette: getRicette,
                dettaglioRicetta: dettaglioRicetta,
                creaRicetta: creaRicetta
                  }

                         })();  