// Calling the module I have created
const filter = require("./mymodule");

let args = process.argv;

const filterCallback = (err, files) => {
    if (err) {
        console.error(err);
    }
    console.log(files);
}

filter(args[2], args[3], filterCallback);