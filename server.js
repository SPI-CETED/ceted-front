(function () {
    "use strict";

    var express = require("express"),
        httpPort = 3000,
        app = express(),
        http = require("http"),
        https = require("https"),
        fs = require('fs'),
        path = require('path');

    app.use(express.static("dist"));

    app.get("/", function (req, res) {
        res.sendFile(__dirname + "/index.html");
    });

    var httpServer = http.Server(app);
    httpServer.listen(httpPort);

})();
