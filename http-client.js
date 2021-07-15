const http = require("http");

let args = process.argv;

const getCallback = (response) => {
    response.on("data", function(data) {
        console.log(data.toString())
    })
    response.on("error", function(error) {
        console.error(error)
    })
}

http.get(args[2], getCallback);

//     response.setEncoding("utf8")
//     response.on("data", console.log)
//     response.on("error", console.error)