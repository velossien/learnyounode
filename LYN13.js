var http= require('http');
var url = require('url');

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "application/json"});
    //check for get request
    if (request.method != 'GET') {
        return request.end('send me a GET\n');
    }
    //parse url with url.parse(request.url, true)
    var parsedUrl = url.parse(request.url, true);
    var path = parsedUrl.path;

    //check path for api/parsetime
    var date = new Date(parsedUrl.query.iso);
    if(path.indexOf("parsetime")>= 0){
        //send json object hour minute second
        var result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        response.end(JSON.stringify(result))
    };

    //check path for api/unixtime
    if(path.indexOf("unixtime")>= 0){
        //send json object unixtime
        var result = {"unixtime":date.getTime()};
        response.end(JSON.stringify(result));
    };
});
server.listen(process.argv[2]);

/*
SOLUTION:

var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
    */
    