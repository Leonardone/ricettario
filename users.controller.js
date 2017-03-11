var mongoose = require('mongoose');
var User = require('./users.model.js');
module.exports= (function(){

    var getuser= function(req, res){
        User.find().exec().then(function(data){
            res.status(200).json(data);
        }).catch(function(err){
            res.status(500).send(err);
        });
    };
    var createuser = function(req, res){
        var Utente=req.body;
        var newUtente = new User(Utente);
        newUtente.save().then(function(data){
            res.status(200).send(data);
        }).catch(function(err){
            res.status(404).send(err);
        });
    
    };

    var detailuser=function(req, res){
        var id= req.params.id;
        User.findById(id).exec().then(function(data){
            res.status(200).json(data);
        }).catch(function(err){
            res.status(500).send(err);
        });
    };
    var deleteuser=function(req, res){
        var id= req.params.id;
        User.findByIdAndRemove(id).exec().then(function(data){
           res.status(200).json(data);
        }).catch(function(err){
            res.status(500).send(err);
        });
    };
    var updateuser=function(req, res){
        var id= req.params.id;
        var newdata = req.body;
       User.findByIdAndUpdate(id, newdata).exec().then(function(data){
           res.status(200).json(data)
       }).catch(function(err){
           res.status(500).send(err);
       });
    };
    var cercausers= function(req,res){
        var cerca = req.query.cerca;
       User.find({
           $or:[{"nome": cerca},
           {"cognome":cerca}]
        })
           .exec().then(function(data){
           res.status(200).json(data);
       }).catch(function(err){
           res.status(500).send(err);
       });
    };

    return{
        getuser: getuser,
        createuser :createuser,
        detailuser: detailuser,
        deleteuser: deleteuser,
        updateuser: updateuser,
        cercausers: cercausers
    };
})();