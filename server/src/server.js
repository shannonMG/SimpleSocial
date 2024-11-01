"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = require("./config/connection");
var express_1 = require("express");
var routes_1 = require("./routes");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3002;
app.use(express_1.default.json());
app.use(routes_1.default);
connection_1.default.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("Server is running on port ".concat(PORT));
    });
}).catch(function (error) {
    console.error('Unable to connect to the database:', error);
});
