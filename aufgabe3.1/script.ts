namespace Aufgabe3_1 {

    async function sendData(): Promise<void> {
        let formData: FormData = new FormData (document.forms[0]);
        console.log(":" + formData.get ("name"));

        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("name: " + entry[1]);
        }

        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        let _url: RequestInfo = "https://gissose-2021.herokuapp.com/";
        _url = _url + "?" + query.toString();
        console.log(_url);

        let response: Response = await fetch (_url);
        let responsetext: string = await response.text();
        console.log (responsetext); 

        let returnelement: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("server-response");
        returnelement.innerText = responsetext; 
    }

    let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button"); 
    button.addEventListener("click", sendData);
}