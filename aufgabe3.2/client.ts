namespace Aufgabe3_2 {

    let jsonButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("JSONButton"); 

    jsonButton.addEventListener("click", sendDataJSON); 


    let htmlButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("HTMLButton"); 

    htmlButton.addEventListener("click", sendDataHTML);


    let return_statement: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverausgabe"); 

    
    async function sendDataHTML(): Promise<void> { 
        let formData: FormData = new FormData (document.forms[0]); 
        let url: RequestInfo = "https://gissose2021mr.herokuapp.com"; 
        
        url += "/html";
        
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); 
        let response: Response = await fetch (url); 
        let responseText: string = await response.text(); 
        return_statement.innerHTML = responseText;
    }


    async function sendDataJSON(): Promise<void> { 
        let formData: FormData = new FormData (document.forms[0]); 
        let url: RequestInfo = "https://gissose2021mr.herokuapp.com"; 

        url += "/json";
        
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); 
        let response: Response = await fetch (url);
        let objektJson: Serverantwort = await response.json();
        console.log(objektJson); 
       

        return_statement.innerHTML = objektJson.username; 
        console.log(return_statement);
    }

    
    interface Serverantwort {
        username: string; 
        birthday: string;
        password: string;
    }

}