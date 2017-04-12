var fs = require('fs');
fs.readFile('../resource/name',function(err,data){
    if(err){
        return console.console.error(err);
    }
    console.log(data.toString());
})
console.log('finish')
