var fs = require('fs');
var buf= fs.readFileSync(process.argv[2]);

var output = buf.toString();
var newLines= output.split("\n");
var numberOfNewLines= newLines.length-1;
console.log(numberOfNewLines);
