namespace Endabgabe {
    //Url für die Server-Verbindung
    let url: RequestInfo;
    function setUrl(): void {
        //url = "https://gissose-2021.herokuapp.com";
        url = "http://localhost:8100";
    }

    console.log("Scoreseite wird angezeigt");

    window.addEventListener("load", showPlayerData);
    window.addEventListener("load", showPlayerTime);

    //Funktion um die benötigte Zeit anzuzeigen
    function showPlayerTime(): void{

        let timeDisplaying: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("displayPlayerTime");
        let usedTimeData: HTMLParagraphElement = document.createElement("p");

        usedTimeData.innerHTML = localStorage.getItem("playedTime");
        timeDisplaying.appendChild(usedTimeData);
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
            let firstnameData: HTMLParagraphElement = document.createElement("p");
            let lastnameData: HTMLParagraphElement = document.createElement("p");
            let timeData: HTMLParagraphElement = document.createElement("p");
            let emptyLine: HTMLParagraphElement = document.createElement("p");

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
}