"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2ServerRequest = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2ServerRequest;
(function (P_3_2ServerRequest) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname;
            if (pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);
            }
            else if (pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
        }
        _response.end();
    }
})(P_3_2ServerRequest = exports.P_3_2ServerRequest || (exports.P_3_2ServerRequest = {}));
//# sourceMappingURL=server.js.map