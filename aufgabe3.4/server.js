"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let urlDB = "mongodb+srv://itsbennymaier:HFUProgrammieren@bennycluster.ehhg0.mongodb.net/Abgabe3_4?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server wurde erfolgreich gestartet!");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function handleRequest(_request, _response) {
        console.log("Die Daten wurden erfolgreich übermittelt!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname;
            let petition = { firstname: url.query.firstname + "", lastname: url.query.lastname + "", extras: url.query.extras + "" };
            if (pathname == "/sendData") {
                let data = await safe(urlDB, petition);
                _response.write(data);
            }
            else if (pathname == "/showData") {
                let serverResponse = await readDB(urlDB);
                _response.write(JSON.stringify(serverResponse));
                console.log(serverResponse);
            }
        }
        _response.end();
    }
    async function safe(_url, _petition) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Abgabe3_4").collection("daten");
        infos.insertOne(_petition);
        let responseString = "Erfolgreich gespeichert!";
        return responseString;
    }
    async function readDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Abgabe3_4").collection("daten");
        let cursor = infos.find();
        let result = await cursor.toArray();
        return result;
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map