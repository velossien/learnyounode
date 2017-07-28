var fs = require('fs');
fs.readFile(process.argv[2],newLineCounting);

function newLineCounting (error, fileData){
    if (error) {
        return console.log(error);
    }
    var output = fileData.toString().split("\n").length-1;
    console.log(output);
}


