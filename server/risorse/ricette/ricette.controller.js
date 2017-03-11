var mongoose= require('mongoose');
var Ricette= require('./ricette.model.js');
module.exports=(function(){



            var getRicette=function(req, res){
               Ricette.find()
               .populate('commenti.autore')
               .exec().then(function(data){
                   res.status(200).json(data);
               }).catch(function(err){
                   res.status(500).json(err)
               });

            }
               var dettaglioRicetta=function(req, res){
                   var id= req.params.id;
                   Ricette.findById(id)
                   .populate('commenti.autore')
                   .exec().then(function(data){
                       res.status(200).json(data);
                   }).catch(function(err){
                       res.status(500).json(err);
                   })

            }
               var creaRicetta=function(req, res){
                   var nuovaRicetta= new Ricette(req.body);
                  nuovaRicetta.save().then(function(data){
                      res.status(200).json(data)
                  }).catch(function(err){
                      res.status(500).json(err);
                  });
               
            }

            var deleteRicetta=function(req, res){
            var id= req.params.id;
            Ricette.findByIdAndRemove(id).exec().then(function(data){
                res.status(200).json(data)
            }).catch(function(err){
                res.status(500).json(err)
            });
        }
            var cercaPerIngrediente=function(req, res){
                 var ingrediente= req.query.ingredienti;
                   Ricette.find({"ingredienti":ingrediente})
                   .exec().then(function(data){
                       res.status(200).json(data);
                   }).catch(function(err){
                       res.status(500).json(err);
                   });

            }
             var cercaPercategoria=function(req, res){
                 var categoria= req.query.categoria;
                   Ricette.find({"categoria":categoria})
                   .exec().then(function(data){
                       res.status(200).json(data);
                   }).catch(function(err){
                       res.status(500).json(err);
                   });

            }
            /*si possono fare insieme le due superiori
              var cercaPercategoria=function(req, res){
                 var categoria= req.query.categoria;
                 var ingredienti= req.query.ingredienti
                   Ricette.find({
                      $or:[{"categoria":categoria
                    },
                    {"ingredienti":$in:[ingrediente]}

                   .exec().then(function(data){
                       res.status(200).json(data);
                   }).catch(function(err){
                       res.status(500).json(err);
                   });

            }
             */
            
             var votaRicetta=function(req, res){
                var id= req.params.id;
                var voto = req.body.voto;
                Ricette.findById(id).exec().then(function(data){
                    data.voto.nvoti +=1;
                    data.voto.svoti +=voto;
                    return data.save();
                
                }).then(function(date){
                    res.status(200).json(date);
                }).catch(function(err){
                res.status(500).send(err);
       });
             }
             var commentaRicetta = function(req, res){
                 var id= req.params.id;
                 Ricette.findById(id)
                 .exec()
                 .then(function(ricetta){
                     var commento=req.body;
                     commento.datacreazione=new Date();
                     ricetta.commenti.push(commento);
                     return ricetta.save();
                 }).then(function(data){
                     res.status(200).json(data)
                 }).catch(function(err){
                     res.status(500).json(err);
                 })
             }

            return{

                getRicette: getRicette,
                dettaglioRicetta: dettaglioRicetta,
                creaRicetta: creaRicetta,
                deleteRicetta: deleteRicetta,
                cercaPerIngrediente: cercaPerIngrediente,
                cercaPercategoria: cercaPercategoria,
                votaRicetta: votaRicetta,
                commentaRicetta: commentaRicetta
                  }

                         })();  