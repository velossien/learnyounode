var http = require('http');

http.get(process.argv[2],function(response) {
    response.setEncoding('utf8');
    response.on('data', function(newData) {
        console.log(newData);});
    response.on('error', function(error){
        console.error(error);});
    })

