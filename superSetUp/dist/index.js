"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 5000;
//set endpoint
app.get("/api", function (req, res) {
    res.send("Hello world");
});
//check for port to avoid already in use error testing
app.listen(port, function () { return console.log("Listening on port " + port + "!"); });
exports.default = app;
