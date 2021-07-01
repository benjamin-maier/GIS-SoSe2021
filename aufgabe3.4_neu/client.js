"use strict";
var Aufgabe3_4_neu;
(function (Aufgabe3_4_neu) {
    //Url für die Server-Verbindung
    let url = "https://gissose-2021.herokuapp.com";
    //Eventlistener für die beiden Buttons
    document.getElementById("sendButton").addEventListener("click", sendEnteredData);
    document.getElementById("showButton").addEventListener("click", showSafedData);
    document.getElementById("deleteButton").addEventListener("click", deleteEnteredData);
    //Funktion sendEnteredData, um die eingegebenen Daten an die Datenbank zu schicken
    async function sendEnteredData() {
        let enteredData = new FormData(document.forms[0]);
        url += "/sendEnteredData";
        let urlExtra = new URLSearchParams(enteredData);
        url += "?" + urlExtra.toString();
        await fetch(url);
        console.log("Daten wurden erfasst.");
    }
    //Funktion showSafedData, um die Daten anzuzeigen die in der Datenbank gespeichert sind
    async function showSafedData() {
        let enteredData = new FormData(document.forms[0]);
        url += "/showSafedData";
        let urlExtra = new URLSearchParams(enteredData);
        url += "?" + urlExtra.toString();
        let returnedData = await fetch(url);
        let databankData = await returnedData.text();
        responseData.innerHTML = databankData;
    }
    let responseData = document.getElementById("dataOutput");
    //Funktion deleteEnteredData, um die eingegebenen Daten an die Datenbank zu schicken
    async function deleteEnteredData() {
        let enteredData = new FormData(document.forms[0]);
        url += "/deleteEnteredData";
        let urlExtra = new URLSearchParams(enteredData);
        url += "?" + urlExtra.toString();
        await fetch(url);
        console.log("Daten wurden entfernt.");
    }
})(Aufgabe3_4_neu || (Aufgabe3_4_neu = {}));
//# sourceMappingURL=client.js.map