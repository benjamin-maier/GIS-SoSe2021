"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let jsonButton = document.getElementById("JSONButton");
    jsonButton.addEventListener("click", sendDataJSON);
    let htmlButton = document.getElementById("HTMLButton");
    htmlButton.addEventListener("click", sendDataHTML);
    let return_statement = document.getElementById("serverausgabe");
    async function sendDataHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021mr.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        return_statement.innerHTML = responseText;
    }
    async function sendDataJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021mr.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let objektJson = await response.json();
        console.log(objektJson);
        return_statement.innerHTML = objektJson.username;
        console.log(return_statement);
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=client.js.map