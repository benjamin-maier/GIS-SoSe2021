"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("name"));
        console.log("Account wurde erstellt!");
        let query = new URLSearchParams(formData);
        let url = "https://gissose-2021.herokuapp.com/";
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let responsetext = await response.text();
        console.log(responsetext);
        let returnelement = document.getElementById("server-response");
        returnelement.innerText = responsetext;
    }
    let button = document.getElementById("button");
    button.addEventListener("click", sendData);
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map