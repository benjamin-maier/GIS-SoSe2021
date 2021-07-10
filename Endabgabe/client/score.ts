namespace Endabgabe {
    //Url für die Server-Verbindung
    let url: RequestInfo;
    function setUrl(): void {
        //url = "https://gissose-2021.herokuapp.com";
        url = "http://localhost:8100";
    }

    document.getElementById("home-button").addEventListener("click", goToHome);

    function goToHome(): void {
        window.location.href = "../html/index.html";
    }

    window.addEventListener("load", showPlayerData);
    window.addEventListener("load", showPlayerTime);
    document.getElementById("playAgainButton").addEventListener("click", playAgain);

    function playAgain(): void {
        window.location.href = "../html/game.html";
    }

    //Funktion um die benötigte Zeit anzuzeigen
    function showPlayerTime(): void {

        let timeDisplaying: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("displayPlayerTime");
        let usedTimeData: HTMLParagraphElement = document.createElement("h3");

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
    function calculatePlayTime(_timeInMiliseconds: number): string {
        let extraMiliseconds: number = (_timeInMiliseconds % 1000);
        let miliseconds: number = (_timeInMiliseconds - extraMiliseconds);
        let seconds: number = (miliseconds / 1000);
        let extraSeconds: number = (seconds % 60);
        let minutes: number = ((seconds - extraSeconds) / 60);

        let timeString: string = minutes.toString() + "min" + " " + extraSeconds.toString() + "sec";

        return timeString;
    }


    //Funktion, um die gespeicherten Spielerdaten anzuzeigen
    async function showPlayerData(): Promise<void> {

        setUrl();

        let enteredData: FormData = new FormData(document.forms[0]);
        url += "/showPlayerData";

        let urlExtra: URLSearchParams = new URLSearchParams(<any>enteredData);
        url += "?" + urlExtra.toString();

        let returnedData: Response = await fetch(url);
        let databankData: string = await returnedData.text();

        let textToForm: PlayerData[] = JSON.parse(databankData);

        let responseData: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("highscoreOutput");


        //Schleife für die Ausgabe der Daten
        for (let k = 0; k < 10; k++) {

            //Paragraph-Elemente, für die Anzeige
            let firstnameData: HTMLParagraphElement = document.createElement("h3");
            let lastnameData: HTMLParagraphElement = document.createElement("h3");
            let timeData: HTMLParagraphElement = document.createElement("h3");
            let emptyLine: HTMLParagraphElement = document.createElement("p");

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
}