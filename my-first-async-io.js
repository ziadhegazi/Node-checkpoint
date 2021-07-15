const fs = require("fs");

let args = process.argv

const readCallback = (err, data) => {
    if (err) {
        console.error(err);
    }
    let lines = data.split("\n").length-1;
    console.log(lines)
}

fs.readFile(args[2], "utf8", readCallback)

