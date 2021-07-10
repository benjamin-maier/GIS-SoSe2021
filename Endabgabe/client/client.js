"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Url für die Server-Verbindung
    let url;
    function setUrl() {
        //url = "https://gissose-2021.herokuapp.com";
        url = "http://localhost:8100";
    }
    document.getElementById("home-button").addEventListener("click", goToHome);
    function goToHome() {
        window.location.href = "../html/index.html";
    }
    //Code für die Admin-Seite (aus Abgabe3.4_neu)
    if ((document.querySelector("title").getAttribute("id") == "admin_html")) {
        //Eventlistener für den Button
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
            let resetVariable = document.getElementById("addPicture");
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
                //Image-Element für die Anzeige
                let pictureOriginData = document.createElement("img");
                let emptyLine = document.createElement("p");
                //innerHTML werden mit den Daten gefüllt
                pictureOriginData.src = textToForm[i].pictureOrigin;
                pictureOriginData.className = "adminImages";
                emptyLine.innerHTML = "";
                //werden appended um gegliedert angezeigt zu werden
                responseData.appendChild(pictureOriginData);
                responseData.appendChild(emptyLine);
                //Button deklarieren und Eventlistener darauf installieren
                let deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Löschen";
                emptyLine.appendChild(deleteButton);
                deleteButton.addEventListener("click", deleteEnteredData);
                //Funktion, um die gespeicherten Daten zu löschen
                async function deleteEnteredData() {
                    setUrl();
                    console.log("Delete-Button wurde gedrückt.");
                    url += "/deleteEnteredData";
                    url += "?pictureOrigin=" + textToForm[i].pictureOrigin;
                    let fetchResponse = await fetch(url);
                    let displayResponse = await fetchResponse.text();
                    responseData.innerHTML = displayResponse;
                    console.log(urlExtra.toString());
                }
            }
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=client.js.map