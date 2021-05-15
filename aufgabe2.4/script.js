"use strict";
/*namespace Aufgabe2_4 {

    if (document.querySelector("title").getAttribute("id") == "site1") {
        function createWheelOptions(_wheel: Wheel): HTMLElement {
            let div: HTMLDivElement = document.createElement("div");
            div.style.maxWidth = "150px";
            div.style.marginLeft = "600px";
            let wheelpicture: HTMLImageElement = document.createElement("img");
            wheelpicture.src = _wheel.wheelpicture;
            wheelpicture.style.width = "100%";
            wheelpicture.style.marginBottom = "25px";
            div.appendChild(wheelpicture);
            let chooseButton: HTMLElement = document.createElement("Button");
            let textChooseButton: Text = document.createTextNode(_wheel.price);
            chooseButton.appendChild(textChooseButton);
            document.body.appendChild(chooseButton);
            chooseButton.addEventListener("click", safe);
            chooseButton.dataset.price = _wheel.price;
            chooseButton.style.marginLeft = "600px";
            sessionStorage.setItem("Wheel", safewheel.toString());
            chooseButton.dataset.safeway = _wheel.price;
            chooseButton.dataset.safeimg = _wheel.wheelpicture;
            return div;
        }

        /*let allUnycicles: allPossibilities = toJSON();
    
        function toJSON (): allPossibilities {
            let Unycicles: allPossibilities = JSON.parse(optionsJSON);
            return(Unycicles);
        }*/
/* for (let i: number = 0; i < myObj.Wheel.length; i++) {
     let wheelElements: HTMLElement = createWheelOptions(myObj.Wheel[i]);
     document.body.appendChild(wheelElements);
     console.log(wheelElements);



 }

 function safewheel(_input: MouseEvent): void {
     let output: HTMLElement = <HTMLElement>_input.target;
     console.log(output.dataset.price);
     window.location.href = "index2.html";

 }
}

if (document.querySelector("title").getAttribute("id") == "site2") {
 function createPoleOptions(_pole: Pole): HTMLElement {
     let div: HTMLDivElement = document.createElement("div");
     div.style.maxWidth = "150px";
     div.style.marginLeft = "630px";
     let polepicture: HTMLImageElement = document.createElement("img");
     polepicture.src = _pole.polepicture;
     polepicture.style.maxHeight = "200px";
     //polepicture.style.width = "100%";
     div.appendChild(polepicture);
     let chooseButton: HTMLElement = document.createElement("Button");
     let textChooseButton: Text = document.createTextNode(_pole.price);
     chooseButton.appendChild(textChooseButton);
     document.body.appendChild(chooseButton);
     chooseButton.addEventListener("click", safe);
     chooseButton.dataset.price = _pole.price;
     chooseButton.style.marginLeft = "600px";
     sessionStorage.setItem("Pole", safepole.toString());
     return div;
 }

 for (let i: number = 0; i < myObj.Pole.length; i++) {
     let poleElements: HTMLElement = createPoleOptions(myObj.Pole[i]);
     document.body.appendChild(poleElements);
     console.log(poleElements);



 }

 function safepole(_input: MouseEvent): void {
     let output: HTMLElement = <HTMLElement>_input.target;
     console.log(output.dataset.price);
     window.location.href = "index3.html";

 }
}

if (document.querySelector("title").getAttribute("id") == "site3") {
 function createSaddleOptions(_saddle: Saddle): HTMLElement {
     let div: HTMLDivElement = document.createElement("div");
     div.style.maxWidth = "150px";
     div.style.marginLeft = "630px";
     let saddlepicture: HTMLImageElement = document.createElement("img");
     saddlepicture.src = _saddle.saddlepicture;
     saddlepicture.style.maxWidth = "200px";
     saddlepicture.style.marginBottom = "60px";
     //saddlepicture.style.width = "100%";
     div.appendChild(saddlepicture);
     let chooseButton: HTMLElement = document.createElement("Button");
     let textChooseButton: Text = document.createTextNode(_saddle.price);
     chooseButton.appendChild(textChooseButton);
     document.body.appendChild(chooseButton);
     chooseButton.addEventListener("click", safe);
     chooseButton.dataset.price = _saddle.price;
     chooseButton.style.marginLeft = "600px";
     sessionStorage.setItem("Saddle", safesaddle.toString());
     return div;
 }

 for (let i: number = 0; i < myObj.Saddle.length; i++) {
     let saddleElements: HTMLElement = createSaddleOptions(myObj.Saddle[i]);
     document.body.appendChild(saddleElements);
     console.log(saddleElements);



 }

 function safesaddle(_input: MouseEvent): void {
     let output: HTMLElement = <HTMLElement>_input.target;
     console.log(output.dataset.price);
     window.location.href = "index4.html";

 }
}

let chosenParts: HTMLDivElement = <HTMLDivElement> document.getElementById ("chosenParts");

if (document.querySelector ("title"). getAttribute("id") == "site2") {
 let wheelImage: HTMLImageElement = document.createElement ("img");
 wheelImage.src = sessionStorage.getItem("Wheel");
 chosenParts.appendChild(wheelImage);
}
else if (document.querySelector ("title"). getAttribute("id") == "site3") {
 let chosenImage: HTMLImageElement = document.createElement ("img");
 chosenImage.src = sessionStorage.getItem("Wheel");
 chosenImage.src = sessionStorage.getItem("Pole");
 //chosenImage.src = sessionStorage.getItem("Saddle");
 chosenParts.appendChild(chosenImage);
}

function safe(_input: MouseEvent): void {
 let output: HTMLElement = <HTMLElement>_input.target;

 if (document.querySelector("title").getAttribute("id") == "site1") {
     localStorage.setItem("chosenwheel", output.dataset.safeway);
     localStorage.setItem("choselwheelpicture", output.dataset.safeimg);
     // console.log(localStorage.getItem("deinewaffel"));
     //console.log(localStorage.getItem("deinwaffelbild"));
 }

 if (document.querySelector("title").getAttribute("id") == "site2") {
     localStorage.setItem("chosenpole", output.dataset.safeway);
     localStorage.setItem("chosenpolepicture", output.dataset.safeimg);
     // console.log(localStorage.getItem("deinewaffel"));
     //console.log(localStorage.getItem("deinwaffelbild"));
 }

 if (document.querySelector("title").getAttribute("id") == "site3") {
     localStorage.setItem("chosensaddle", output.dataset.safeway);
     localStorage.setItem("chosensaddlepicture", output.dataset.safeimg);
     // console.log(localStorage.getItem("deinewaffel"));
     //console.log(localStorage.getItem("deinwaffelbild"));
 }

}

if (document.querySelector("title").getAttribute("id") == "site2") {
 let div: HTMLDivElement = document.createElement("div");
 div.style.maxWidth = "250px";
 document.body.appendChild(div);


 let wheelpicture: HTMLImageElement = document.createElement("img");
 wheelpicture.src = localStorage.getItem("chosenwheel");
 wheelpicture.style.width = "100%";
 div.appendChild(wheelpicture);
}

if (document.querySelector("title").getAttribute("id") == "site4") {

 let chooseButton: HTMLElement = document.createElement("Button");
     let textChooseButton: Text = document.createTextNode("Konfigurator neu starten");
     chooseButton.appendChild(textChooseButton);
     document.body.appendChild(chooseButton);
     chooseButton.addEventListener("click", restart);
     chooseButton.style.marginLeft = "600px";

 function restart(): void {
     window.location.href = "index.html";
     sessionStorage.clear();
 }
}
}
*/ 
//# sourceMappingURL=script.js.map