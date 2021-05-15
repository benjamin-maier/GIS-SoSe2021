"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let allObjects = JSON.parse(Aufgabe2_4.optionsJSON);
    function createOptions(_part) {
        let div = document.createElement("div");
        div.style.maxWidth = "150px";
        let wheelpicture = document.createElement("img");
        wheelpicture.src = _part.image;
        wheelpicture.style.width = "100%";
        div.appendChild(wheelpicture);
        let chooseButton = document.createElement("Button");
        let textChooseButton = document.createTextNode(_part.price);
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.addEventListener("click", safe);
        chooseButton.dataset.safeway = _part.price;
        chooseButton.dataset.safeimg = _part.image;
        return div;
    }
    if (document.querySelector("title").getAttribute("id") == "site1") {
        for (let i = 0; i < allObjects.Wheel.length; i++) {
            let unycicleelements = createOptions(allObjects.Wheel[i]);
            document.body.appendChild(unycicleelements);
            console.log(unycicleelements);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site2") {
        for (let i = 0; i < allObjects.Pole.length; i++) {
            let unycicleelements = createOptions(allObjects.Pole[i]);
            document.body.appendChild(unycicleelements);
            console.log(unycicleelements);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site3") {
        for (let i = 0; i < allObjects.Saddle.length; i++) {
            let unycicleelements = createOptions(allObjects.Saddle[i]);
            document.body.appendChild(unycicleelements);
            console.log(unycicleelements);
        }
    }
    function safe(_input) {
        let output = _input.target;
        if (document.querySelector("title").getAttribute("id") == "site1") {
            console.log(output.dataset.safeway);
            localStorage.setItem("chosenwheel", output.dataset.safeway);
            localStorage.setItem("chosenwheelpicture", output.dataset.safeimg);
            window.location.href = "index2.html";
        }
        if (document.querySelector("title").getAttribute("id") == "site2") {
            console.log(output.dataset.safeway);
            localStorage.setItem("chosenpole", output.dataset.safeway);
            localStorage.setItem("chosenpolepicture", output.dataset.safeimg);
            window.location.href = "index3.html";
        }
        if (document.querySelector("title").getAttribute("id") == "site3") {
            console.log(output.dataset.safeway);
            localStorage.setItem("chosensaddle", output.dataset.safeway);
            localStorage.setItem("chosensaddlepicture", output.dataset.safeimg);
            window.location.href = "index4.html";
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site2") {
        let div = document.createElement("div");
        div.style.height = "100px";
        document.body.appendChild(div);
        let wheelpicture = document.createElement("img");
        wheelpicture.src = localStorage.getItem("chosenwheelpicture");
        wheelpicture.style.marginTop = "50px";
        wheelpicture.style.width = "200px";
        div.appendChild(wheelpicture);
    }
    if (document.querySelector("title").getAttribute("id") == "site3") {
        let div = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let polepicture = document.createElement("img");
        polepicture.src = localStorage.getItem("chosenpolepicture");
        polepicture.style.height = "300px";
        div.appendChild(polepicture);
        let wheelpicture = document.createElement("img");
        wheelpicture.src = localStorage.getItem("chosenwheelpicture");
        wheelpicture.style.marginTop = "50px";
        wheelpicture.style.width = "200px";
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
            localStorage.clear();
        }
        let div = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
        let saddlepicture = document.createElement("img");
        saddlepicture.src = localStorage.getItem("chosensaddlepicture");
        saddlepicture.style.width = "90%";
        saddlepicture.style.marginTop = "50px";
        saddlepicture.style.marginLeft = "550px";
        div.appendChild(saddlepicture);
        let polepicture = document.createElement("img");
        polepicture.src = localStorage.getItem("chosenpolepicture");
        polepicture.style.height = "400px";
        polepicture.style.marginTop = "-6.5px";
        polepicture.style.marginLeft = "612px";
        div.appendChild(polepicture);
        let wheelpicture = document.createElement("img");
        wheelpicture.src = localStorage.getItem("chosenwheelpicture");
        wheelpicture.style.width = "100%";
        wheelpicture.style.marginTop = "-140px";
        wheelpicture.style.marginLeft = "510px";
        div.appendChild(wheelpicture);
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script2.js.map