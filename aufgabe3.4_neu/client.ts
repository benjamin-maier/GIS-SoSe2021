namespace Aufgabe3_4_neu{

//Url für die Server-Verbindung
let url: RequestInfo = "https://gissose-2021.herokuapp.com";


//Eventlistener für die beiden Buttons
document.getElementById("sendButton").addEventListener("click", sendEnteredData);
document.getElementById("sendButton").addEventListener("click", showSafedData);


//Funktion sendEnteredData, um die eingegebenen Daten an die Datenbank zu schicken
async function sendEnteredData(): Promise<void> {
    
    let enteredData: FormData = new FormData (document.forms[0]);
    url += "/sendEnteredData";

    let urlExtra : URLSearchParams = new URLSearchParams (<any> enteredData);
    url += "?" + urlExtra.toString();

    await fetch (url);
}


//Funktion showSafedData, um die Daten anzuzeigen die in der Datenbank gespeichert sind
async function showSafedData(): Promise <void> {
    
    let enteredData: FormData = new FormData (document.forms[0]);
    url += "/showSafedData";

    let urlExtra : URLSearchParams = new URLSearchParams (<any> enteredData);
    url += "?" + urlExtra.toString();

    let returnedData: Response = await fetch (url);
    let databankData: string = await returnedData.text();

    responseData.innerHTML = databankData;
}
let responseData: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("dataOutput");
}