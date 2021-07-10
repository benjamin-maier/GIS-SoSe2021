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
    window.addEventListener("load", showPlayerData);
    window.addEventListener("load", showPlayerTime);
    document.getElementById("playAgainButton").addEventListener("click", playAgain);
    function playAgain() {
        window.location.href = "../html/game.html";
    }
    //Funktion um die benötigte Zeit anzuzeigen
    function showPlayerTime() {
        let timeDisplaying = document.getElementById("displayPlayerTime");
        let usedTimeData = document.createElement("h3");
        usedTimeData.innerHTML = calculatePlayTime(parseFloat(localStorage.getItem("playedTime")));
        timeDisplaying.appendChild(usedTimeData);
    }
    //Funktion, um die Zeit ordentlich umzurechnen
    function calculatePlayTime(_timeInMiliseconds) {
        let extraMiliseconds = (_timeInMiliseconds % 1000);
        let miliseconds = (_timeInMiliseconds - extraMiliseconds);
        let seconds = (miliseconds / 1000);
        let extraSeconds = (seconds % 60);
        let minutes = ((seconds - extraSeconds) / 60);
        let timeString = minutes.toString() + "min" + " " + extraSeconds.toString() + "sec";
        return timeString;
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
            for (let t = 0; t < textToForm.length; t++) {
                if (textToForm.length > 1) {
                    if (textToForm[t].time > textToForm[t + 1].time) {
                        textToForm[t] = playerHelpVariable;
                        textToForm[t + 1] = textToForm[t];
                        playerHelpVariable = textToForm[t + 1];
                    }
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
            firstnameData.innerHTML = i.toString() + "." + textToForm[i].firstname;
            lastnameData.innerHTML = textToForm[i].lastname;
            timeData.innerHTML = calculatePlayTime(textToForm[i].time);
            //werden appended um gegliedert angezeigt zu werden
            responseData.appendChild(firstnameData);
            responseData.appendChild(lastnameData);
            responseData.appendChild(timeData);
            responseData.appendChild(emptyLine);
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=score.js.map