// Calling the module I have created
const filter = require("./mymodule");

let args = process.argv;

const filterCallback = (err, files) => {
    if (err) {
        console.error(err);
    }
    files.forEach(file => {
        console.log(file)
    });;
}

filter(args[2], args[3], filterCallback);