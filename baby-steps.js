const process = require("process")
let args = process.argv

let sum = 0;
for (i = 3; i <= args.length; i++) {
    sum += parseInt(args[i-1]);
}

console.log(sum)