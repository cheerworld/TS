"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var express_1 = __importDefault(require("express"));
var fs_1 = require("fs");
var csvtojson_1 = __importDefault(require("csvtojson"));
var app = express_1.default();
var port = 3000;
var inputFile = "./users.csv";
var outputFile = "users.json";
app.get("/convert", function (req, res) {
    res.send("converting in process!");
    csvtojson_1.default()
        .fromFile(inputFile)
        .then(function (obj) {
            console.log(obj);
            var newData = obj.map(function (item) {
                var first = item.first_name;
                var last = item.last_name;
                var phone = item.phone;
                if (phone === "") {
                    phone = "missing phone number";
                }
                return {
                    first: first,
                    last: last,
                    phone: phone
                };
            });
            fs_1.promises.writeFile(outputFile, JSON.stringify(newData));
        });
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});