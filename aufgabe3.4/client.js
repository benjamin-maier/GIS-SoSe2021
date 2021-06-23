"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let url = "https://gissose-2021.herokuapp.com";
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        url += "/sendData";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let responseData = await fetch(url);
        console.log(responseData);
    }
    document.getElementById("showData").addEventListener("click", showData);
    document.getElementById("sendData").addEventListener("click", sendData);
    async function showData() {
        let formData = new FormData(document.forms[0]);
        url += "/showData";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let responseData = await fetch(url);
        let distribution = await responseData.text();
        console.log("Ich habe etwas empfangen!");
        returnedData.innerHTML = distribution;
    }
    let returnedData = document.getElementById("data");
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=client.js.map