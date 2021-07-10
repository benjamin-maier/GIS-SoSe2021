namespace Endabgabe{

    document.getElementById("playTheGameButton").addEventListener("click", playTheGame);
    document.getElementById("goToScoresButton").addEventListener("click", showTheScores);
    document.getElementById("goToAdminButton").addEventListener("click", goToAdmin);

    function playTheGame(): void{
        window.location.href = "../html/game.html";
    }

    function showTheScores(): void{
        window.location.href = "../html/score.html";
    }

    function goToAdmin(): void{
        window.location.href = "../html/admin.html";
    }
}