var fs = require('fs');
var path= require('path');

module.exports = modularFilterBase;

function modularFilterBase(dir,ext,callback){
    fs.readdir(dir, filteringExt);

    function filteringExt (error, list){
        if (error) {
            return callback(error);
        }

        var filteredFilenames=[];
        for (var i=0; i<list.length;i++) {
            if (path.extname(list[i])==="."+ext){
                filteredFilenames.push(path.basename(list[i]));
            }
        }
        return callback(null,filteredFilenames);
    }
}
