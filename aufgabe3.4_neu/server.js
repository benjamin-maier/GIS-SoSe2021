"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4_neu = void 0;
//Import von allen wichtigen Datentypen
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4_neu;
(function (Aufgabe3_4_neu) {
    //URL der Datenbank-Verbindung festlegen (MongoAtlas)
    let urlDatabank = "mongodb+srv://itsbennymaier:HFUProgrammieren@bennycluster.ehhg0.mongodb.net/Abgabe3_4?retryWrites=true&w=majority";
    //Port für die Connection zum Server zuweisen und Server starten
    let serverPort = Number(process.env.PORT);
    if (!serverPort)
        serverPort = 8100;
    startCreatedServer(serverPort);
    //Funktion um den Server zu starten
    function startCreatedServer(_serverPort) {
        let createdServer = Http.createServer();
        createdServer.listen(_serverPort);
        createdServer.addListener("request", handleUserRequest);
    }
    let newUrl;
    //Funktion um mit der User-Anfrage umgehen zu können
    async function handleUserRequest(_userRequest, _serverResponse) {
        console.log("Request angekommen.");
        _serverResponse.setHeader("Access-Control-Allow-Origin", "*");
        _serverResponse.setHeader("content-type", "text/html; charset=utf-8");
        //Abfrage nach der URL
        if (_userRequest.url != undefined) {
            newUrl = Url.parse(_userRequest.url, true);
            let formularData = { lastname: newUrl.query.lastname + "", firstname: newUrl.query.firstname + "", number: newUrl.query.number + "", module: newUrl.query.module + "" };
            //let formularData: Mongo.FilterQuery<any> = {"lastname":"number": newUrl.query.number.toString();
            console.log("Matrikelnummer:" + newUrl.query.number);
            //Abfrage, ob sendEnteredData abgerufen wird
            if (newUrl.pathname == "/sendEnteredData") {
                console.log("sendEnteredData wird ausgeführt");
                let enteredData = await safeEnteredData(urlDatabank, formularData);
                _serverResponse.write(enteredData);
            }
            //Abfrage, ob deleteEnteredData abgerufen wird
            if (newUrl.pathname == "/deleteEnteredData") {
                console.log("deleteEnteredData wird ausgeführt");
                let enteredData = await deleteEnteredData(urlDatabank, formularData);
                _serverResponse.write(enteredData);
            }
            //Abfrage, ob showSafedData abgerufen wird
            if (newUrl.pathname == "/showSafedData") {
                console.log("showSafedData wird ausgeführt");
                let serverResponseArray = await readDataFromDatabank(urlDatabank);
                _serverResponse.write(JSON.stringify(serverResponseArray));
            }
        }
        _serverResponse.end();
    }
    //Funktion, um die eingegebenen Daten in der Datenbank zu speichern
    async function safeEnteredData(_requestedUrl, _formularData) {
        let mongoDetails = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClientDetails = new Mongo.MongoClient(_requestedUrl, mongoDetails);
        await mongoClientDetails.connect();
        let collectionDetails = mongoClientDetails.db("Abgabe3_4").collection("students");
        collectionDetails.insertOne(_formularData);
        let databaseResponseString = "Die Daten wurden erfolgreich gespeichert!";
        return databaseResponseString;
    }
    //Funktion, um die Daten aus der Datenbank auf der Seite anzeigen zu lassen
    async function readDataFromDatabank(_requestedUrl) {
        let mongoDetails = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClientDetails = new Mongo.MongoClient(_requestedUrl, mongoDetails);
        await mongoClientDetails.connect();
        let collectionDetails = mongoClientDetails.db("Abgabe3_4").collection("students");
        let databaseCursor = collectionDetails.find();
        let databaseSerachResult = await databaseCursor.toArray();
        return databaseSerachResult;
    }
    //Funktion, um Daten in der Datenbank zu löschen
    async function deleteEnteredData(_requestedUrl, _formularData) {
        let mongoDetails = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClientDetails = new Mongo.MongoClient(_requestedUrl, mongoDetails);
        await mongoClientDetails.connect();
        let collectionDetails = mongoClientDetails.db("Abgabe3_4").collection("students");
        collectionDetails.deleteOne(_formularData);
        let databaseResponseString = "Die Daten wurden erfolgreich entfernt!";
        return databaseResponseString;
    }
})(Aufgabe3_4_neu = exports.Aufgabe3_4_neu || (exports.Aufgabe3_4_neu = {}));
//# sourceMappingURL=server.js.map