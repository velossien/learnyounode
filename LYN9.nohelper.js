var http = require('http');

var listOfData = [];
var count = 0;
//slice cuts the array start at 2 - only gives the inputs needed!
url = process.argv.slice(2);

url.forEach(function (value, index){
    listOfData[index]='';
    http.get(value, function(response){
        response.setEncoding('utf8');
        response.on('data', function(data){
            listOfData[index] += data;
        })
        response.on('end', allDone);
    });
});

function allDone(){
    count+= 1;
    if (count=== listOfData.length){
        listOfData.forEach(function(value){
            console.log(value);
        });
    }
}