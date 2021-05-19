"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    if (document.querySelector("title").getAttribute("id") == "site1") {
        function createWheelOptions(_wheel) {
            let div = document.createElement("div");
            div.style.maxWidth = "150px";
            div.style.marginLeft = "600px";
            let wheelpicture = document.createElement("img");
            wheelpicture.src = _wheel.wheelpicture;
            wheelpicture.style.width = "100%";
            wheelpicture.style.marginBottom = "25px";
            div.appendChild(wheelpicture);
            let chooseButton = document.createElement("Button");
            let textChooseButton = document.createTextNode(_wheel.price);
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
        for (let i = 0; i < Aufgabe2_4.myObj.Wheel.length; i++) {
            let wheelElements = createWheelOptions(Aufgabe2_4.myObj.Wheel[i]);
            document.body.appendChild(wheelElements);
            console.log(wheelElements);
        }
        function safewheel(_input) {
            let output = _input.target;
            console.log(output.dataset.price);
            window.location.href = "index2.html";
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site2") {
        function createPoleOptions(_pole) {
            let div = document.createElement("div");
            div.style.maxWidth = "150px";
            div.style.marginLeft = "630px";
            let polepicture = document.createElement("img");
            polepicture.src = _pole.polepicture;
            polepicture.style.maxHeight = "200px";
            //polepicture.style.width = "100%";
            div.appendChild(polepicture);
            let chooseButton = document.createElement("Button");
            let textChooseButton = document.createTextNode(_pole.price);
            chooseButton.appendChild(textChooseButton);
            document.body.appendChild(chooseButton);
            chooseButton.addEventListener("click", safe);
            chooseButton.dataset.price = _pole.price;
            chooseButton.style.marginLeft = "600px";
            sessionStorage.setItem("Pole", safepole.toString());
            return div;
        }
        for (let i = 0; i < Aufgabe2_4.myObj.Pole.length; i++) {
            let poleElements = createPoleOptions(Aufgabe2_4.myObj.Pole[i]);
            document.body.appendChild(poleElements);
            console.log(poleElements);
        }
        function safepole(_input) {
            let output = _input.target;
            console.log(output.dataset.price);
            window.location.href = "index3.html";
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site3") {
        function createSaddleOptions(_saddle) {
            let div = document.createElement("div");
            div.style.maxWidth = "150px";
            div.style.marginLeft = "630px";
            let saddlepicture = document.createElement("img");
            saddlepicture.src = _saddle.saddlepicture;
            saddlepicture.style.maxWidth = "200px";
            saddlepicture.style.marginBottom = "60px";
            //saddlepicture.style.width = "100%";
            div.appendChild(saddlepicture);
            let chooseButton = document.createElement("Button");
            let textChooseButton = document.createTextNode(_saddle.price);
            chooseButton.appendChild(textChooseButton);
            document.body.appendChild(chooseButton);
            chooseButton.addEventListener("click", safe);
            chooseButton.dataset.price = _saddle.price;
            chooseButton.style.marginLeft = "600px";
            sessionStorage.setItem("Saddle", safesaddle.toString());
            return div;
        }
        for (let i = 0; i < Aufgabe2_4.myObj.Saddle.length; i++) {
            let saddleElements = createSaddleOptions(Aufgabe2_4.myObj.Saddle[i]);
            document.body.appendChild(saddleElements);
            console.log(saddleElements);
        }
        function safesaddle(_input) {
            let output = _input.target;
            console.log(output.dataset.price);
            window.location.href = "index4.html";
        }
    }
    let chosenParts = document.getElementById("chosenParts");
    if (document.querySelector("title").getAttribute("id") == "site2") {
        let wheelImage = document.createElement("img");
        wheelImage.src = sessionStorage.getItem("Wheel");
        chosenParts.appendChild(wheelImage);
    }
    else if (document.querySelector("title").getAttribute("id") == "site3") {
        let chosenImage = document.createElement("img");
        chosenImage.src = sessionStorage.getItem("Wheel");
        chosenImage.src = sessionStorage.getItem("Pole");
        //chosenImage.src = sessionStorage.getItem("Saddle");
        chosenParts.appendChild(chosenImage);
    }
    function safe(_input) {
        let output = _input.target;
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
        let div = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let wheelpicture = document.createElement("img");
        wheelpicture.src = localStorage.getItem("chosenwheel");
        wheelpicture.style.width = "100%";
        div.appendChild(wheelpicture);
    }
    if (document.querySelector("title").getAttribute("id") == "site4") {
        let chooseButton = document.createElement("Button");
        let textChooseButton = document.createTextNode("Konfigurator neu starten");
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.addEventListener("click", restart);
        chooseButton.style.marginLeft = "600px";
        function restart() {
            window.location.href = "index.html";
            sessionStorage.clear();
        }
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script-test.js.map