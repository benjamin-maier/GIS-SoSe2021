"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Url für die Server-Verbindung
    let url;
    function setUrl() {
        url = "https://gissose-2021.herokuapp.com";
        //url = "http://localhost:8100";
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
        //Um Texte nicht anzuzeigen, wenn nicht gespielt wurde
        if (localStorage.getItem("playedTime") == undefined) {
            usedTimeData.innerHTML = "Keine Daten vorhanden!";
            document.getElementById("h1ScorePage").classList.add("hideImage");
            document.getElementById("h2ScorePage").classList.add("hideImage");
            document.getElementById("displayPlayerTime").classList.add("hideImage");
            document.getElementById("paragraphScorePage").classList.add("setOpacityDown");
            document.getElementById("playAgainButton").innerHTML = "Spiel spielen";
        }
        //Um Texte anzuzeigen, wenn der Spiekler gerade von der Game-Seite kommt und Daten vorhanden sind
        else {
            usedTimeData.innerHTML = calculatePlayTime(parseFloat(localStorage.getItem("playedTime")));
            document.getElementById("h1ScorePage").classList.remove("hideImage");
            document.getElementById("h2ScorePage").classList.remove("hideImage");
            document.getElementById("displayPlayerTime").classList.remove("hideImage");
            document.getElementById("paragraphScorePage").classList.add("setOpacityUp");
            document.getElementById("playAgainButton").innerHTML = "Erneut spielen";
        }
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
        //Schleife für die Ausgabe der Daten
        for (let k = 0; k < 10; k++) {
            //Paragraph-Elemente, für die Anzeige
            let firstnameData = document.createElement("h3");
            let lastnameData = document.createElement("h3");
            let timeData = document.createElement("h3");
            let emptyLine = document.createElement("p");
            //innerHTML werden mit den Daten gefüllt
            firstnameData.innerHTML = (k + 1).toString() + "." + textToForm[k].firstname;
            lastnameData.innerHTML = textToForm[k].lastname;
            timeData.innerHTML = calculatePlayTime(textToForm[k].time);
            emptyLine.innerHTML = "-------------";
            //werden appended um gegliedert angezeigt zu werden
            responseData.appendChild(firstnameData);
            responseData.appendChild(lastnameData);
            responseData.appendChild(timeData);
            responseData.appendChild(emptyLine);
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=score.js.map