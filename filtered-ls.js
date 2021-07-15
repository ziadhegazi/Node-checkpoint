const fs = require("fs");

let args = process.argv;

const dirCallback = (err, files) => {
    if (err) {
        console.error(err);
    }
    // let filtered = files.filter(e => e.includes(args[3]))
    // console.log(filtered)

    for (file of files) {
        if (file.includes("." + args[3])) {
            console.log(file)
        }
    }
}

fs.readdir(args[2], dirCallback)