namespace Aufgabe3_4 {
    
    let url: RequestInfo = "https://gissose-2021.herokuapp.com";

    async function sendData(): Promise<void> {
        let formData: FormData = new FormData (document.forms[0]);

        url += "/sendData";

        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();

        let responseData: Response = await fetch (url);

        console.log(responseData);
    }

    document.getElementById("showData").addEventListener("click", showData);

    document.getElementById("sendData").addEventListener("click", sendData);

    async function showData(): Promise <void> { 
        let formData: FormData = new FormData (document.forms[0]);

        url += "/showData";

        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();


        let responseData: Response = await fetch (url);

        let distribution: string = await responseData.text();

        console.log("Ich habe etwas empfangen!");

        returnedData.innerHTML = distribution;
    }
    let returnedData: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("data");
}