import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {

let urlDB: string = "mongodb+srv://itsbennymaier:HFUProgrammieren@bennycluster.ehhg0.mongodb.net/Abgabe3_4?retryWrites=true&w=majority";

let port: number = Number(process.env.PORT);
if (!port)
    port = 8100;

startServer(port);



function startServer (_port: number | string): void {

    let server: Http.Server = Http. createServer(); 
    console.log("Server wurde erfolgreich gestartet!");

    server.listen(_port);
    server.addListener("request", handleRequest);
}


async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> { 

    console.log("Die Daten wurden erfolgreich übermittelt!");

    _response.setHeader("content-type", "text/html; charset=utf-8");

    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (_request.url) {
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

        let pathname: string = <string>url.pathname;

        let petition: Petition = {firstname: url.query.firstname + "", lastname: url.query.lastname + "", extras: url.query.extras + ""};


        if (pathname == "/sendData") {

        let data: string = await safe (urlDB, petition);

        _response.write(data);
    }


        else if (pathname == "/showData") { 

            let serverResponse: Petition[] = await readDB(urlDB);
            
            _response.write(JSON.stringify(serverResponse));

            console.log(serverResponse);
        }     
    }


    _response.end();
}
    


async function safe(_url: string, _petition: Petition): Promise <string> {

    let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);

    await mongoClient.connect();


    let infos: Mongo.Collection = mongoClient.db("Abgabe3_4").collection("daten");

    infos.insertOne (_petition);

    let responseString: string = "Erfolgreich gespeichert!";

    return responseString;
}


async function readDB(_url: string): Promise <Petition[]> {

    let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);

    await mongoClient.connect();


    let infos: Mongo.Collection = mongoClient.db("Abgabe3_4").collection("daten");
    let cursor: Mongo.Cursor = infos.find ();
    let result: Petition[] = await cursor.toArray();

    return result;

}

interface Petition {
    firstname: string;
    lastname: string;
    extras: string;
}
}