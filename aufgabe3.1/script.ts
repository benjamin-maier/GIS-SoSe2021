namespace Aufgabe3_1 {

    async function sendData(): Promise<void> {
        let formData: FormData = new FormData (document.forms[0]);
        console.log(":" + formData.get ("name"));

        console.log("Account wurde erstellt!");

        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        let url: RequestInfo = "https://gissose-2021.herokuapp.com/";
        url = url + "?" + query.toString();
        console.log(url);

        let response: Response = await fetch (url);
        let responsetext: string = await response.text();
        console.log (responsetext); 

        let returnelement: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("server-response");
        returnelement.innerText = responsetext; 
    }

    let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button"); 
    button.addEventListener("click", sendData);
}