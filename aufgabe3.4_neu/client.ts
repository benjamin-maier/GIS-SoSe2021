namespace Aufgabe3_4_neu {

    //Url für die Server-Verbindung

    let url: RequestInfo;
    function setUrl(): void {
    url = "https://gissose-2021.herokuapp.com";
    //url = "http://localhost:8100";
    }
    

    //Eventlistener für die beiden Buttons
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
        let resetVariable:HTMLFormElement = <HTMLFormElement> document.getElementById("registration");
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

        let textToForm: formularData[] = JSON.parse(databankData);

        let responseData: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("dataOutput");


        //Schleife für die Ausgabe der Daten
        for (let i = 0; i < textToForm.length; i++) {

            //Paragraph-Elemente, für die Anzeige
            let lastnameData: HTMLParagraphElement = document.createElement("p");
            let firstnameData: HTMLParagraphElement = document.createElement("p");
            let numberData: HTMLParagraphElement = document.createElement("p");
            let moduleData: HTMLParagraphElement = document.createElement("p");
            let emptyLine: HTMLParagraphElement = document.createElement("p");

            //innerHTML werden mit den Daten gefüllt
            lastnameData.innerHTML = textToForm[i].lastname;
            firstnameData.innerHTML = textToForm[i].firstname;
            numberData.innerHTML = textToForm[i].number;
            moduleData.innerHTML = textToForm[i].module;

            //werden appended um gegliedert angezeigt zu werden
            responseData.appendChild(lastnameData);
            responseData.appendChild(firstnameData);
            responseData.appendChild(numberData);
            responseData.appendChild(moduleData);
            responseData.appendChild(emptyLine);


            //Button deklarieren und Eventlistener darauf installieren
            let deleteButton: HTMLButtonElement = document.createElement("button");
            deleteButton.innerHTML = "Löschen";
            emptyLine.appendChild(deleteButton);

            deleteButton.addEventListener("click", deleteSafedData);


            //Funktion, um die gespeicherten Daten zu löschen
            async function deleteSafedData(): Promise<void> {

                setUrl();

                console.log("Delete-Button wurde gedrückt.");
                
                url += "/deleteSafedData";
        
                url += "?lastname=" + textToForm[i].lastname + "&firstname=" + textToForm[i].firstname + "&number=" + textToForm[i].number + "&module=" + textToForm[i].module;
                //url += "?number=" + textToForm[i].number;
        
                let fetchResponse: Response = await fetch(url);

                let displayResponse: string = await fetchResponse.text();

                responseData.innerHTML = displayResponse;

                console.log(urlExtra.toString());
            }
        }
    }
}