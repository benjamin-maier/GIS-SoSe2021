"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    function createWheelOptions(_wheel) {
        let div = document.createElement("div");
        div.style.maxWidth = "150px";
        div.style.marginLeft = "600px";
        let wheelpicture = document.createElement("img");
        wheelpicture.src = _wheel.wheelpicture;
        wheelpicture.style.width = "100%";
        div.appendChild(wheelpicture);
        let chooseButton = document.createElement("Button");
        let textChooseButton = document.createTextNode(_wheel.price);
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.addEventListener("click", safewheel);
        chooseButton.dataset.price = _wheel.price;
        chooseButton.style.marginLeft = "600px";
        localStorage.setItem("Wheel", safewheel.toString());
        console.log(localStorage.getItem("Wheel" + "Test"));
        return div;
    }
    for (let i = 0; i < Aufgabe2_4.myObj.Wheel.length; i++) {
        let wheelElements = createWheelOptions(Aufgabe2_4.myObj.Wheel[i]);
        document.body.appendChild(wheelElements);
        console.log(wheelElements);
    }
    function safewheel(_input) {
        let output = _input.target;
        console.log(output.dataset.price);
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map