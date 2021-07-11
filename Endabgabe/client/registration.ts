namespace Endabgabe {

    //Url für die Server-Verbindung
    let url: RequestInfo;
    function setUrl(): void {
        url = "https://gissose-2021.herokuapp.com";
        //url = "http://localhost:8100";
    }

    document.getElementById("skipToScoreButton").addEventListener("click", skipToScore);
    document.getElementById("safePlayerButton").addEventListener("click", sendPlayerData);


    //Funktion, um direkt zur Score-Seite zu gelangen
    function skipToScore(): void {
        window.location.href = "../html/score.html";
    }

    //Funktion, um die eingegebenen Daten an die Datnebnak zu übermitteln
    async function sendPlayerData(): Promise<void> {

        setUrl();

        let enteredData: FormData = new FormData(document.forms[0]);
        url += "/sendPlayerData";

        let urlExtra: URLSearchParams = new URLSearchParams(<any>enteredData);
        url += "?" + urlExtra.toString() + "&time=" + localStorage.getItem("playedTime");
        console.log(urlExtra.toString());
        

        await fetch(url);
        console.log("Daten wurden erfasst.");

        //Formular-Einträge wieder zurücksetzen
        let resetVariable: HTMLFormElement = <HTMLFormElement>document.getElementById("registrationForm");
        resetVariable.reset();

        window.location.href = "../html/score.html";
    }
}