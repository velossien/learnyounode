var fs = require('fs');
var path= require('path');

fs.readdir(process.argv[2],filteringExt);

function filteringExt (error, list){
    if (error) {
        return console.log(error);
    }
    var filteredFilenames=[];
    for (var i=0; i<list.length;i++) {
        if (path.extname(list[i])=="."+process.argv[3]){
            filteredFilenames.push(path.basename(list[i]));
        }
    }

    return console.log(filteredFilenames.join("\n"));
}


