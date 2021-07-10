"use strict";
var Endabgabe;
(function (Endabgabe) {
    localStorage.clear();
    document.getElementById("playTheGameButton").addEventListener("click", playTheGame);
    document.getElementById("goToScoresButton").addEventListener("click", showTheScores);
    document.getElementById("goToAdminButton").addEventListener("click", goToAdmin);
    function playTheGame() {
        window.location.href = "../html/game.html";
    }
    function showTheScores() {
        window.location.href = "../html/score.html";
    }
    function goToAdmin() {
        window.location.href = "../html/admin.html";
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=home.js.map