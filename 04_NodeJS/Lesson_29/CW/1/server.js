﻿'use strict'


var http = require('http');
var port = process.env.port || 1337;

http.createServer(function (req, res) {
    console.log(req.method);
    console.log(req.url);

    res.end();

}).listen(port);


console.log('server running on port ' + port);