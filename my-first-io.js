const fs = require("fs");
const process = require("process")

let args = process.argv;

let data = fs.readFileSync(args[2], "utf8");

console.log(data.split("\n").length-1)