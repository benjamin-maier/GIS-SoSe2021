//Import von allen wichtigen Datentypen
import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4_neu {


//URL der Datenbank-Verbindung festlegen (MongoAtlas)
let urlDatabank: string = "mongodb+srv://itsbennymaier:HFUProgrammieren@bennycluster.ehhg0.mongodb.net/Abgabe3_4?retryWrites=true&w=majority";


//Port für die Connection zum Server zuweisen und Server starten
let serverPort: number = Number(process.env.PORT);

if (!serverPort)
serverPort = 8100;

startCreatedServer(serverPort);


//Funktion um den Server zu starten
function startCreatedServer (_serverPort: number | string): void {

    let createdServer: Http.Server = Http.createServer();

    createdServer.listen(_serverPort);
    createdServer.addListener("request", handleUserRequest);
}

let newUrl: Url.UrlWithParsedQuery;

//Funktion um mit der User-Anfrage umgehen zu können
async function handleUserRequest(_userRequest: Http.IncomingMessage, _serverResponse: Http.ServerResponse): Promise<void> {

    console.log("Request angekommen.");
    
    _serverResponse.setHeader("Access-Control-Allow-Origin", "*");
    _serverResponse.setHeader("content-type", "text/html; charset=utf-8");

    //Abfrage nach der URL
    if (_userRequest.url != undefined) {

        newUrl = Url.parse(_userRequest.url, true);

        let formularData: formularData = {lastname: newUrl.query.lastname + "", firstname: newUrl.query.firstname + "", number: newUrl.query.number + "", module: newUrl.query.module + ""};
        //let formularData: Mongo.FilterQuery<any> = {"lastname":"number": newUrl.query.number.toString();
        console.log("Matrikelnummer:" + newUrl.query.number);
        
        //Abfrage, ob sendEnteredData abgerufen wird
        if (newUrl.pathname == "/sendEnteredData") {

            console.log("sendEnteredData wird ausgeführt");
            let enteredData: string = await safeEnteredData (urlDatabank, formularData);
            _serverResponse.write(enteredData);
        }

        //Abfrage, ob deleteEnteredData abgerufen wird
        if (newUrl.pathname == "/deleteEnteredData") {

            console.log("deleteEnteredData wird ausgeführt");
            let enteredData: string = await deleteEnteredData (urlDatabank, formularData);
            _serverResponse.write(enteredData);
        }

        //Abfrage, ob showSafedData abgerufen wird
        if (newUrl.pathname == "/showSafedData") {

            console.log("showSafedData wird ausgeführt");
            let serverResponseArray: formularData[] = await readDataFromDatabank(urlDatabank);
            _serverResponse.write(JSON.stringify(serverResponseArray));
        }
    }
    _serverResponse.end();
}


//Funktion, um die eingegebenen Daten in der Datenbank zu speichern
async function safeEnteredData(_requestedUrl:string, _formularData: Mongo.FilterQuery<any>): Promise<string> {
    
    let mongoDetails: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClientDetails: Mongo.MongoClient = new Mongo.MongoClient(_requestedUrl, mongoDetails);
    await mongoClientDetails.connect();

    let collectionDetails: Mongo.Collection = mongoClientDetails.db("Abgabe3_4").collection("students");
    collectionDetails.insertOne(_formularData);

    let databaseResponseString: string = "Die Daten wurden erfolgreich gespeichert!";
    return databaseResponseString;
}


//Funktion, um die Daten aus der Datenbank auf der Seite anzeigen zu lassen
async function readDataFromDatabank(_requestedUrl: string): Promise <formularData[]> {
    
    let mongoDetails: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClientDetails: Mongo.MongoClient = new Mongo.MongoClient(_requestedUrl, mongoDetails);
    await mongoClientDetails.connect();
    
    let collectionDetails: Mongo.Collection = mongoClientDetails.db("Abgabe3_4").collection("students");
    let databaseCursor: Mongo.Cursor = collectionDetails.find();
    let databaseSerachResult: formularData[] = await databaseCursor.toArray();
    return databaseSerachResult;
}


//Funktion, um Daten in der Datenbank zu löschen
async function deleteEnteredData(_requestedUrl:string, _formularData: Mongo.FilterQuery<any>): Promise<string> {
    
    let mongoDetails: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClientDetails: Mongo.MongoClient = new Mongo.MongoClient(_requestedUrl, mongoDetails);
    await mongoClientDetails.connect();

    let collectionDetails: Mongo.Collection = mongoClientDetails.db("Abgabe3_4").collection("students");
    collectionDetails.deleteOne(_formularData);

    let databaseResponseString: string = "Die Daten wurden erfolgreich entfernt!";
    return databaseResponseString;
}












































}