const http = require("http");
const fs = require("fs");
var requests = require("requests");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=f88db876a96145f290e89b3f6194675c')
            .on('data', function (chunk) {
                const jsonData = JSON.parse(chunk);
                console.log(jsonData);
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
            });
    }
});


const PORT = process.env.PORT || 5000;
server.listen(PORT, "127.0.0.1");