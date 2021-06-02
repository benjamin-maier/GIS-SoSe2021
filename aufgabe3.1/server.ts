import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server"); //Wird in der Konsole ausgegeben
    let port: number = Number(process.env.PORT); //Number wird em port zugewiesen
    if (!port)
        port = 8100; //Der Port wird auf 8100 gesetzt

    let server: Http.Server = Http.createServer(); //http-Server wird erstellt
    server.addListener("request", handleRequest); //Ein Listener für "handleRequest" wird erschaffen
    server.addListener("listening", handleListen); //Ein Listener für "handleListen" wird erschaffen
    server.listen(port); //Dem Server wird der Port mitgeteilt, auf den er achten soll

    function handleListen(): void {//handleListen wird initialisiert
       // console.log("Listening"); //"Listening" wird ausgegeben
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //handleRequest wird initialisiert
        console.log("I hear voices!"); //"I hear voices!" wird ausgegeben
        //console.log(_request.url); //Die url wird ebenfalls ausgegeben

        _response.setHeader("content-type", "text/html; charset=utf-8"); //HTML-Eigenschaften werden definiert
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Die Zugriffserlaubnis wird definiert
        _response.write(_request.url); //url wird in die Antwort geschrieben
        _response.end(); //Nachdem die Antwort erhalten wurde, wird beendet
    }
}