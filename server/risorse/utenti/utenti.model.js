var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var utenteSchema= new Schema({


username: {
    type: String,
    required:[true, "devi inserire il titolo"],
    unique: true
        },
    password: {
    type: String,
    required:[true, "devi inserire il titolo"]
        },
        
categoria:[{
    type:String,
    enum:["dolce","secondo", "primo","antipasto","contorni"],
    required:[true, "devi inserire una categoria"]
}],
avatar:{
    type: String,
    default:"http://img08.deviantart.net/c9b6/i/2012/264/2/e/avatar_angelina_by_edit_express-d34muar.jpg"
},
ricettePreferite:[{
    type: Schema.Types.ObjectId,
    ref: 'Ricette'
}]

});

var Utenti = mongoose.model('Utenti', utenteSchema);
module.exports= Utenti;
