// Making my own module
const fs = require("fs");

const filter = (dirName, fileExt, callback) => {
    fs.readdir(dirName, function (err, files) {
        if (err) {
            return callback(err);
        }
        let array = files.filter(e => e.includes("." + fileExt));
        // for (file of files) {
        //     if (file.includes("." + fileExt)) {
        //         array.push(file)
        //     }
        // }
        callback(null, array);
    })
}

module.exports = filter;