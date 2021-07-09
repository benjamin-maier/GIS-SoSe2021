"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
//Import von allen wichtigen Datentypen
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    //URL der Datenbank-Verbindung festlegen (MongoAtlas)
    let urlDatabank = "mongodb+srv://itsbennymaier:HFUProgrammieren@bennycluster.ehhg0.mongodb.net/Memory_Game?retryWrites=true&w=majority";
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
            let pictureFormularData = { pictureOrigin: newUrl.query.pictureOrigin + "" };
            let playerFormularData = { firstname: newUrl.query.firstname + "", lastname: newUrl.query.lastname + "", time: newUrl.query.time + "" };
            //let formularData: Mongo.FilterQuery<any> = {"lastname":"number": newUrl.query.number.toString();
            //Abfrage, ob sendEnteredData abgerufen wird
            if (newUrl.pathname == "/sendEnteredData") {
                console.log("sendEnteredData wird ausgeführt");
                let enteredData = await safeEnteredData(urlDatabank, pictureFormularData);
                _serverResponse.write(enteredData);
            }
            //Abfrage, ob deleteEnteredData abgerufen wird
            if (newUrl.pathname == "/deleteEnteredData") {
                console.log("deleteEnteredData wird ausgeführt");
                let enteredData = await deleteEnteredData(urlDatabank, pictureFormularData);
                _serverResponse.write(enteredData);
            }
            //Abfrage, ob showSafedData abgerufen wird
            if (newUrl.pathname == "/showSafedData") {
                console.log("showSafedData wird ausgeführt");
                let serverResponseArray = await readDataFromDatabank(urlDatabank);
                _serverResponse.write(JSON.stringify(serverResponseArray));
            }
            //Abfrage, ob getImages abgerufen wird
            if (newUrl.pathname == "/getImages") {
                console.log("getImages wird ausgeführt");
                let databankImages = await getImages(urlDatabank);
                _serverResponse.write(JSON.stringify(databankImages));
            }
            //Abfrage, ob sendPlayerData abgerufen wird
            if (newUrl.pathname == "/sendPlayerData") {
                console.log("sendPlayerData wird ausgeführt");
                let enteredData = await sendPlayerData(urlDatabank, playerFormularData);
                _serverResponse.write(enteredData);
            }
        }
        _serverResponse.end();
    }
    //Funktion, um die eingegebenen Daten in der Datenbank zu speichern
    async function safeEnteredData(_requestedUrl, _formularData) {
        let mongoDetails = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClientDetails = new Mongo.MongoClient(_requestedUrl, mongoDetails);
        await mongoClientDetails.connect();
        let collectionDetails = mongoClientDetails.db("Memory_Game").collection("memoryPictures");
        collectionDetails.insertOne(_formularData);
        let databaseResponseString = "Die Daten wurden erfolgreich gespeichert!";
        return databaseResponseString;
    }
    //Funktion, um die Daten aus der Datenbank auf der Seite anzeigen zu lassen
    async function readDataFromDatabank(_requestedUrl) {
        let mongoDetails = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClientDetails = new Mongo.MongoClient(_requestedUrl, mongoDetails);
        await mongoClientDetails.connect();
        let collectionDetails = mongoClientDetails.db("Memory_Game").collection("memoryPictures");
        let databaseCursor = collectionDetails.find();
        let databaseSerachResult = await databaseCursor.toArray();
        return databaseSerachResult;
    }
    //Funktion, um Daten in der Datenbank zu löschen
    async function deleteEnteredData(_requestedUrl, _pictureFormularData) {
        let mongoDetails = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClientDetails = new Mongo.MongoClient(_requestedUrl, mongoDetails);
        await mongoClientDetails.connect();
        let collectionDetails = mongoClientDetails.db("Memory_Game").collection("memoryPictures");
        collectionDetails.deleteOne(_pictureFormularData);
        let databaseResponseString = "Die Daten wurden erfolgreich entfernt!";
        return databaseResponseString;
    }
    //Funktion, um die Bilder aus der Datenbank zu holen
    async function getImages(_requestedUrl) {
        let mongoDetails = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClientDetails = new Mongo.MongoClient(_requestedUrl, mongoDetails);
        await mongoClientDetails.connect();
        let collectionDetails = mongoClientDetails.db("Memory_Game").collection("memoryPictures");
        let databaseCursor = collectionDetails.find();
        let databaseImageSerachResult = await databaseCursor.toArray();
        return databaseImageSerachResult;
    }
    //Funktion, um die Spieler-Daten in der Datenbank zu speichern
    async function sendPlayerData(_requestedUrl, _PlayerData) {
        let mongoDetails = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClientDetails = new Mongo.MongoClient(_requestedUrl, mongoDetails);
        await mongoClientDetails.connect();
        let collectionDetails = mongoClientDetails.db("Memory_Game").collection("playerData");
        collectionDetails.insertOne(_PlayerData);
        let databaseResponseString = "Die Daten wurden erfolgreich gespeichert!";
        return databaseResponseString;
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map