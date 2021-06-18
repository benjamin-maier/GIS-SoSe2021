namespace Aufgabe3_4 {

    let sendButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("sendData"); 
    sendButton.addEventListener("click", sendData); 

    
    async function sendData(): Promise<void> {
        let formData: FormData = new FormData (document.forms[0]);
        let url: RequestInfo = "https://gissose-2021.herokuapp.com/";

        url += "/sendData";

        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();

        let responseData: Response = await fetch (url);
        let distribution: string = await responseData.text();

        console.log(distribution);
    }


    let showButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("showData"); 

    showButton.addEventListener("click", showData);

    let returnedData: HTMLDivElement = <HTMLDivElement> document.getElementById("data");


    async function showData(): Promise <void> { 
        let formData: FormData = new FormData (document.forms[0]);

        let url: RequestInfo = "https://gissose-2021.herokuapp.com/";

        url += "/showData";

        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();


        let responseData: Response = await fetch (url);

        let distribution: string = await responseData.text();

        returnedData.innerHTML = distribution;
    }
}