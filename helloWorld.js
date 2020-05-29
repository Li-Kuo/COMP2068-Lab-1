// Edit this document online

"use strict";

var http = require("http");
http
  .createSever(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Hello World!");
  })
  .listen(3000);

console.log("123");
