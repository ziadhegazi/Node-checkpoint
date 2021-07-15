// Making my own module
const fs = require("fs");

const filter = (dirName, fileExt, callback) => {
    fs.readdir(dirName, function (err, files) {
        if (err) {
            return callback(err);
        }
        for (file of files) {
            if (file.includes("." + fileExt)) {
                callback(null, file);
            }
        }
    })
}

module.exports = filter;