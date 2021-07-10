"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Url für die Server-Verbindung
    let url;
    function setUrl() {
        //url = "https://gissose-2021.herokuapp.com";
        url = "http://localhost:8100";
    }
    document.getElementById("skipToScoreButton").addEventListener("click", skipToScore);
    document.getElementById("safePlayerButton").addEventListener("click", sendPlayerData);
    //Funktion, um direkt zur Score-Seite zu gelangen
    function skipToScore() {
        window.location.href = "../html/score.html";
    }
    //Funktion, um die eingegebenen Daten an die Datnebnak zu übermitteln
    async function sendPlayerData() {
        setUrl();
        let enteredData = new FormData(document.forms[0]);
        url += "/sendPlayerData";
        let urlExtra = new URLSearchParams(enteredData);
        url += "?" + urlExtra.toString() + "&time=" + localStorage.getItem("playedTime");
        console.log(urlExtra.toString());
        await fetch(url);
        console.log("Daten wurden erfasst.");
        //Formular-Einträge wieder zurücksetzen
        let resetVariable = document.getElementById("registrationForm");
        resetVariable.reset();
        window.location.href = "../html/score.html";
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=registration.js.map