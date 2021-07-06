namespace Endabgabe {

    //Code für die Admin-Seite (aus Abgabe3.4_neu)
    if ((document.querySelector("title").getAttribute("id") == "admin_html")) {
        //Url für die Server-Verbindung
        let url: RequestInfo;
        function setUrl(): void {
            //url = "https://gissose-2021.herokuapp.com";
            url = "http://localhost:8100";
        }

        //Eventlistener für den Button
        document.getElementById("sendButton").addEventListener("click", sendEnteredData);
        document.getElementById("showButton").addEventListener("click", showSafedData);

        //Funktion sendEnteredData, um die eingegebenen Daten an die Datenbank zu schicken
        async function sendEnteredData(): Promise<void> {

            setUrl();

            let enteredData: FormData = new FormData(document.forms[0]);
            url += "/sendEnteredData";

            let urlExtra: URLSearchParams = new URLSearchParams(<any>enteredData);
            url += "?" + urlExtra.toString();

            await fetch(url);
            console.log("Daten wurden erfasst.");

            //Formular-Einträge wieder zurücksetzen
            let resetVariable: HTMLFormElement = <HTMLFormElement>document.getElementById("addPicture");
            resetVariable.reset();
        }

        //Funktion showSafedData, um die Daten anzuzeigen die in der Datenbank gespeichert sind
        async function showSafedData(): Promise<void> {

            setUrl();

            let enteredData: FormData = new FormData(document.forms[0]);
            url += "/showSafedData";

            let urlExtra: URLSearchParams = new URLSearchParams(<any>enteredData);
            url += "?" + urlExtra.toString();

            let returnedData: Response = await fetch(url);
            let databankData: string = await returnedData.text();

            let textToForm: pictureFormularData[] = JSON.parse(databankData);

            let responseData: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("dataOutput");

        //Schleife für die Ausgabe der Daten
        for (let i = 0; i < textToForm.length; i++) {

            //Image-Element für die Anzeige
            let pictureOriginData: HTMLImageElement = document.createElement("img");
            let emptyLine: HTMLParagraphElement = document.createElement("p");

            //innerHTML werden mit den Daten gefüllt
            pictureOriginData.innerHTML = textToForm[i].pictureOrigin;

            //werden appended um gegliedert angezeigt zu werden
            pictureOriginData.appendChild(pictureOriginData);
            responseData.appendChild(emptyLine);

            //Button deklarieren und Eventlistener darauf installieren
            let deleteButton: HTMLButtonElement = document.createElement("button");
            deleteButton.innerHTML = "Löschen";
            emptyLine.appendChild(deleteButton);

            deleteButton.addEventListener("click", deleteEnteredData);


            //Funktion, um die gespeicherten Daten zu löschen
            async function deleteEnteredData(): Promise<void> {

                setUrl();

                console.log("Delete-Button wurde gedrückt.");

                url += "/deleteEnteredData";

                url += "?url=" + textToForm[i].pictureOrigin;
                //url += "?number=" + textToForm[i].number;

                let fetchResponse: Response = await fetch(url);

                let displayResponse: string = await fetchResponse.text();

                responseData.innerHTML = displayResponse;

                console.log(urlExtra.toString());
            }
        }
        }
    }



















































}