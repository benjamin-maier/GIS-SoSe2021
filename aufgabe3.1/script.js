"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("name: " + entry[1]);
        }
        let query = new URLSearchParams(formData);
        let _url = "https://gissose-2021.herokuapp.com/";
        _url = _url + "?" + query.toString();
        console.log(_url);
        let response = await fetch(_url);
        let responsetext = await response.text();
        console.log(responsetext);
        let returnelement = document.getElementById("server-response");
        returnelement.innerText = responsetext;
    }
    let button = document.getElementById("button");
    button.addEventListener("click", sendData);
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map