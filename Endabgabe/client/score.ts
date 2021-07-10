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

        usedTimeData.innerHTML = calculatePlayTime(parseFloat(localStorage.getItem("playedTime")));
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

        sortPlayerArray(textToForm);
        console.log(textToForm);


        //Funktion, um das Array zu sortieren
        function sortPlayerArray(_arrayToSort: PlayerData[]): PlayerData[] {

            //Zwischenspeicher für die Sortierung
            let playerHelpVariable: PlayerData;

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
            let firstnameData: HTMLParagraphElement = document.createElement("p");
            let lastnameData: HTMLParagraphElement = document.createElement("p");
            let timeData: HTMLParagraphElement = document.createElement("p");
            let emptyLine: HTMLParagraphElement = document.createElement("p");

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
}