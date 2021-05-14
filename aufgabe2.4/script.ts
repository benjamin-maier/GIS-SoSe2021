namespace Aufgabe2_4 {

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
            chooseButton.addEventListener("click", safewheel);
            chooseButton.dataset.price = _wheel.price;
            chooseButton.style.marginLeft = "600px";
            sessionStorage.setItem("Wheel", safewheel.toString());
            return div;
        }

        /*let allUnycicles: allPossibilities = toJSON();
    
        function toJSON (): allPossibilities {
            let Unycicles: allPossibilities = JSON.parse(optionsJSON);
            return(Unycicles);
        }*/

        for (let i: number = 0; i < myObj.Wheel.length; i++) {
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
            chooseButton.addEventListener("click", safepole);
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
            chooseButton.addEventListener("click", safesaddle);
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

    if (document.querySelector("title").getAttribute("id") == "site4") {
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
            sessionStorage.getItem("Saddle");
            return div;
        }

        for (let i: number = 0; i < myObj.Saddle.length; i++) {
            let saddleElements: HTMLElement = createSaddleOptions(myObj.Saddle.indexOf(sessionStorage.getItem("Saddle")));
            document.body.appendChild(saddleElements);
        }
    }
}