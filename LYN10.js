var net = require('net');
var server = net.createServer(function(socket){
    var date = new Date();
    date.setFullYear(date.getFullYear());
    date.setMonth(date.getMonth() + 1 < 10 ? ("0" + date.getMonth()) : date.getMonth());
    date.setDate(date.getDate() <10 ? ("0" + date.getDate()) : date.getDate());
    var preTimezoneHours = (date.getHours());
    date.setMinutes(date.getMinutes());

    var currentTimezone = date.getTimezoneOffset()/60 * -1;
    if ( currentTimezone !== 0) {
        var postTimeZoneHours = preTimezoneHours + currentTimezone;
    }
    date.setHours(postTimeZoneHours);

    var formattedDate = date.toISOString().replace("T"," ").replace("Z","").substring(0,16)+"\n";
    socket.end(formattedDate);
});
server.listen(process.argv[2]);