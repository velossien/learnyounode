var filteredModule = require('./LYN6module');

filteredModule(process.argv[2],process.argv[3],printResult);

function printResult(err, data) {
    if (err) return console.error(err);
    console.log(data.join("\n"));
}