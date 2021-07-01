"use strict";
var Aufgabe3_4_neu;
(function (Aufgabe3_4_neu) {
    //Url für die Server-Verbindung
    let url = "https://gissose-2021.herokuapp.com";
    //Eventlistener für die beiden Buttons
    document.getElementById("sendButton").addEventListener("click", sendEnteredData);
    document.getElementById("showButton").addEventListener("click", showSafedData);
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
        let databankData = await returnedData.json();
        let responseData = document.getElementById("dataOutput");
        for (let i = 0; i < databankData.length; i++) {
            let lastnameData = document.createElement("p");
            let firstnameData = document.createElement("p");
            let numberData = document.createElement("p");
            let moduleData = document.createElement("p");
            let emptyLine = document.createElement("p");
            lastnameData.innerHTML = databankData[i].lastname;
            firstnameData.innerHTML = databankData[i].firstname;
            numberData.innerHTML = databankData[i].number;
            moduleData.innerHTML = databankData[i].module;
            responseData.appendChild(lastnameData);
            responseData.appendChild(firstnameData);
            responseData.appendChild(numberData);
            responseData.appendChild(moduleData);
            responseData.appendChild(emptyLine);
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Löschen";
            emptyLine.appendChild(deleteButton);
            deleteButton.addEventListener("click", deleteSafedData);
            async function deleteSafedData() {
                url += "/deleteSafedData";
                url += "?lastname=" + databankData[i].lastname + "&firstname=" + databankData[i].firstname + "&number=" + databankData[i].number + "&module=" + databankData[i].module;
                let fetchResponse = await fetch(url);
                let displayResponse = await fetchResponse.text();
                responseData.innerHTML = displayResponse;
                console.log(urlExtra.toString());
            }
        }
    }
})(Aufgabe3_4_neu || (Aufgabe3_4_neu = {}));
//# sourceMappingURL=client.js.map