"use strict";
var Aufgabe3_4_neu;
(function (Aufgabe3_4_neu) {
    //Url für die Server-Verbindung
    let url;
    function setUrl() {
        url = "https://gissose-2021.herokuapp.com";
        //url = "http://localhost:8100";
    }
    //Eventlistener für die beiden Buttons
    document.getElementById("sendButton").addEventListener("click", sendEnteredData);
    document.getElementById("showButton").addEventListener("click", showSafedData);
    //Funktion sendEnteredData, um die eingegebenen Daten an die Datenbank zu schicken
    async function sendEnteredData() {
        setUrl();
        let enteredData = new FormData(document.forms[0]);
        url += "/sendEnteredData";
        let urlExtra = new URLSearchParams(enteredData);
        url += "?" + urlExtra.toString();
        await fetch(url);
        console.log("Daten wurden erfasst.");
        //Formular-Einträge wieder zurücksetzen
        let resetVariable = document.getElementById("registration");
        resetVariable.reset();
    }
    //Funktion showSafedData, um die Daten anzuzeigen die in der Datenbank gespeichert sind
    async function showSafedData() {
        setUrl();
        let enteredData = new FormData(document.forms[0]);
        url += "/showSafedData";
        let urlExtra = new URLSearchParams(enteredData);
        url += "?" + urlExtra.toString();
        let returnedData = await fetch(url);
        let databankData = await returnedData.text();
        let textToForm = JSON.parse(databankData);
        let responseData = document.getElementById("dataOutput");
        //Schleife für die Ausgabe der Daten
        for (let i = 0; i < textToForm.length; i++) {
            //Paragraph-Elemente, für die Anzeige
            let lastnameData = document.createElement("p");
            let firstnameData = document.createElement("p");
            let numberData = document.createElement("p");
            let moduleData = document.createElement("p");
            let emptyLine = document.createElement("p");
            //innerHTML werden mit den Daten gefüllt
            lastnameData.innerHTML = textToForm[i].lastname;
            firstnameData.innerHTML = textToForm[i].firstname;
            numberData.innerHTML = textToForm[i].number;
            moduleData.innerHTML = textToForm[i].module;
            //werden appended um gegliedert angezeigt zu werden
            responseData.appendChild(lastnameData);
            responseData.appendChild(firstnameData);
            responseData.appendChild(numberData);
            responseData.appendChild(moduleData);
            responseData.appendChild(emptyLine);
            //Button deklarieren und Eventlistener darauf installieren
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Löschen";
            emptyLine.appendChild(deleteButton);
            deleteButton.addEventListener("click", deleteSafedData);
            //Funktion, um die gespeicherten Daten zu löschen
            async function deleteSafedData() {
                setUrl();
                console.log("Delete-Button wurde gedrückt.");
                url += "/deleteSafedData";
                //url += "?lastname=" + textToForm[i].lastname + "&firstname=" + textToForm[i].firstname + "&number=" + textToForm[i].number + "&module=" + textToForm[i].module;
                url += "?number=" + textToForm[i].number;
                let fetchResponse = await fetch(url);
                let displayResponse = await fetchResponse.text();
                responseData.innerHTML = displayResponse;
                console.log(urlExtra.toString());
            }
        }
    }
})(Aufgabe3_4_neu || (Aufgabe3_4_neu = {}));
//# sourceMappingURL=client.js.map