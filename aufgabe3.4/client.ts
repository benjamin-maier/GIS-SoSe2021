namespace Aufgabe3_4 {
    
    async function sendData(): Promise<void> {
        let formData: FormData = new FormData (document.forms[0]);
        let url: RequestInfo = "https://gissose-2021.herokuapp.com/";

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

        let url: RequestInfo = "https://gissose-2021.herokuapp.com/";

        url += "/showData";

        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();


        let responseData: Response = await fetch (url);

        let distribution: string = await responseData.text();

        returnedData.innerHTML = distribution;
    }
    let returnedData: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("data");
}