var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var ricettaSchema= new Schema({
    
titolo: {
    type: String,
    required:[true, "devi inserire il titolo"]
        },
        
categoria:{
    type:String,
    enum:["dolce","secondo", "primo","antipasto","contorni"],
    required:[true, "devi inserire una categoria"]
},
immagini:[{
    type:String,
    required:[true, "devi inserire un'immagine"]
}],
difficolta:{
    type:String,
    enum:["facile","medio", "difficile"],
    required:[true, "devi inserire una categoria"]
},
temperaturadicottura:{
    type:Number,
    required:[true, "devi inserire la temperatura"],
    min:[5, "troppo poco caldo"],
    max:[250, "si brucia"]
},
tempodicottura:{
    type:Number,
    required:[true, "devi inserire tempo di cottura"],
    min:[5, "troppo poco"],
    max:[180, "troppo"]
},
preparazione:{
    type:String,
    required:[true, "Devi inserire la preparazione"]
},
ingredienti:[{
    type:String,
    required:[true, "devi inserire gli ingredienti"]
}],
voto:{
    type:Number,
    min:[1,"troppo poco"],
    max:[5, "troppo"]
},
commenti:[{
        autore:{
            type: Schema.Types.ObjectId,
            ref:"Utenti"
                },
        commento:String

}]

});

var Ricette = mongoose.model('Ricette', ricettaSchema);
module.exports=Ricette;
        