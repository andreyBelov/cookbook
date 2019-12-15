var express = require("express");

const PORT = 3000;
const HOST = '0.0.0.0';

var app = express();

app.use("/node_modules", express.static("/usr/src/sportsstore/node_modules"));
app.use("/", express.static("/usr/src/sportsstore/app"));

app.listen(PORT, HOST, function () { console.log("HTTP Server running on port 3000"); });
