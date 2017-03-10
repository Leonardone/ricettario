var mongoose = require('mongoose');
mongoose.connect("mongodb://admin:admin@ds127300.mlab.com:27300/ricettario", function(err){
if(!err){
    console.log("database connesso");
}else{
    console.log(err);
}
});
