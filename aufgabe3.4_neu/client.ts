namespace Aufgabe3_4_neu {

    //Url für die Server-Verbindung
    let url: RequestInfo = "https://gissose-2021.herokuapp.com";


    //Eventlistener für die beiden Buttons
    document.getElementById("sendButton").addEventListener("click", sendEnteredData);
    document.getElementById("showButton").addEventListener("click", showSafedData);


    //Funktion sendEnteredData, um die eingegebenen Daten an die Datenbank zu schicken
    async function sendEnteredData(): Promise<void> {

        let enteredData: FormData = new FormData(document.forms[0]);
        url += "/sendEnteredData";

        let urlExtra: URLSearchParams = new URLSearchParams(<any>enteredData);
        url += "?" + urlExtra.toString();

        await fetch(url);
        console.log("Daten wurden erfasst.");
    }


    //Funktion showSafedData, um die Daten anzuzeigen die in der Datenbank gespeichert sind
    async function showSafedData(): Promise<void> {

        let enteredData: FormData = new FormData(document.forms[0]);
        url += "/showSafedData";

        let urlExtra: URLSearchParams = new URLSearchParams(<any>enteredData);
        url += "?" + urlExtra.toString();

        let returnedData: Response = await fetch(url);
        let databankData: formularData[] = await returnedData.json();

        let responseData: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("dataOutput");

        for (let i = 0; i < databankData.length; i++) {

            let lastnameData: HTMLParagraphElement = document.createElement("p");
            let firstnameData: HTMLParagraphElement = document.createElement("p");
            let numberData: HTMLParagraphElement = document.createElement("p");
            let moduleData: HTMLParagraphElement = document.createElement("p");
            let emptyLine: HTMLParagraphElement = document.createElement("p");

            lastnameData.innerHTML = databankData[i].lastname;
            firstnameData.innerHTML = databankData[i].firstname;
            numberData.innerHTML = databankData[i].number;
            moduleData.innerHTML = databankData[i].module;

            responseData.appendChild(lastnameData);
            responseData.appendChild(firstnameData);
            responseData.appendChild(numberData);
            responseData.appendChild(moduleData);
            responseData.appendChild(emptyLine);

            let deleteButton: HTMLButtonElement = document.createElement("button");
            deleteButton.innerHTML = "Löschen";
            emptyLine.appendChild(deleteButton);

            deleteButton.addEventListener("click", deleteSafedData);

            async function deleteSafedData(): Promise<void> {

                url += "/deleteSafedData";
        
                url += "?lastname=" + databankData[i].lastname + "&firstname=" + databankData[i].firstname + "&number=" + databankData[i].number + "&module=" + databankData[i].module;
        
                let fetchResponse: Response = await fetch(url);

                let displayResponse: string = await fetchResponse.text();

                responseData.innerHTML = displayResponse;

                console.log(urlExtra.toString());
            }
        }
    }
}