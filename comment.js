// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// 2. Create server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (filename == './') {
        filename = './index.html';
    }