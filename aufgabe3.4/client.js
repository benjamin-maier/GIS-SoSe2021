"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let sendButton = document.getElementById("sendData");
    sendButton.addEventListener("click", sendData);
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose-2021.herokuapp.com/";
        url += "/sendData";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let responseData = await fetch(url);
        let distribution = await responseData.text();
        console.log(distribution);
    }
    let showButton = document.getElementById("showData");
    showButton.addEventListener("click", showData);
    let returnedData = document.getElementById("data");
    async function showData() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose-2021.herokuapp.com/";
        url += "/showData";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let responseData = await fetch(url);
        let distribution = await responseData.text();
        returnedData.innerHTML = distribution;
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=client.js.map