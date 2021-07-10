"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Url für die Server-Verbindung
    let url;
    function setUrl() {
        //url = "https://gissose-2021.herokuapp.com";
        url = "http://localhost:8100";
    }
    console.log("Scoreseite wird angezeigt");
    window.addEventListener("load", showPlayerData);
    window.addEventListener("load", showPlayerTime);
    //Funktion um die benötigte Zeit anzuzeigen
    function showPlayerTime() {
        let timeDisplaying = document.getElementById("displayPlayerTime");
        let usedTimeData = document.createElement("p");
        usedTimeData.innerHTML = localStorage.getItem("playedTime");
        timeDisplaying.appendChild(usedTimeData);
    }
    //Funktion, um die gespeicherten Spielerdaten anzuzeigen
    async function showPlayerData() {
        setUrl();
        let enteredData = new FormData(document.forms[0]);
        url += "/showPlayerData";
        let urlExtra = new URLSearchParams(enteredData);
        url += "?" + urlExtra.toString();
        let returnedData = await fetch(url);
        let databankData = await returnedData.text();
        let textToForm = JSON.parse(databankData);
        let responseData = document.getElementById("highscoreOutput");
        sortPlayerArray(textToForm);
        console.log(textToForm);
        //Funktion, um das Array zu sortieren
        function sortPlayerArray(_arrayToSort) {
            //Zwischenspeicher für die Sortierung
            let playerHelpVariable;
            for (let index = 0; index < textToForm.length; index++) {
                if (textToForm[index].time > textToForm[index + 1].time) {
                    textToForm[index] = playerHelpVariable;
                    textToForm[index + 1] = textToForm[index];
                    playerHelpVariable = textToForm[index + 1];
                }
            }
            return textToForm;
        }
        //Schleife für die Ausgabe der Daten
        for (let i = 1; i < 11; i++) {
            //Paragraph-Elemente, für die Anzeige
            let firstnameData = document.createElement("p");
            let lastnameData = document.createElement("p");
            let timeData = document.createElement("p");
            let emptyLine = document.createElement("p");
            //innerHTML werden mit den Daten gefüllt
            firstnameData.innerHTML = i + "." + textToForm[i].firstname;
            lastnameData.innerHTML = textToForm[i].lastname;
            timeData.innerHTML = textToForm[i].time.toString();
            //werden appended um gegliedert angezeigt zu werden
            responseData.appendChild(firstnameData);
            responseData.appendChild(lastnameData);
            responseData.appendChild(timeData);
            responseData.appendChild(emptyLine);
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=score.js.map