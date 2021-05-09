"use strict";
var Aufgabe2_3_2;
(function (Aufgabe2_3_2) {
    console.log("---------------");
    console.log("AUFGABE 2a & b:");
    Aufgabe2_3_2.UnicycleArray = [];
    let addblackWheelButton = document.createElement("Button");
    let textblackWheelButton = document.createTextNode("Schwarz");
    addblackWheelButton.appendChild(textblackWheelButton);
    document.body.appendChild(addblackWheelButton);
    addblackWheelButton.id = "blackWheelButtonID";
    document.getElementById("blackWheelButtonID").addEventListener("click", logBlackWheel);
    function logBlackWheel() {
        console.log("Sie wählten:");
        console.log(Aufgabe2_3_2.wheelArray[0]);
    }
    let addbrownWheelButton = document.createElement("Button");
    let textbrownWheelButton = document.createTextNode("Braun");
    addbrownWheelButton.appendChild(textbrownWheelButton);
    document.body.appendChild(addbrownWheelButton);
    addbrownWheelButton.id = "brownWheelButtonID";
    document.getElementById("brownWheelButtonID").addEventListener("click", logBrownWheel);
    function logBrownWheel() {
        console.log("Sie wählten:");
        console.log(Aufgabe2_3_2.wheelArray[1]);
    }
    let addgreyWheelButton = document.createElement("Button");
    let textgreyWheelButton = document.createTextNode("Grau");
    addgreyWheelButton.appendChild(textgreyWheelButton);
    document.body.appendChild(addgreyWheelButton);
    addgreyWheelButton.id = "greyWheelButtonID";
    document.getElementById("greyWheelButtonID").addEventListener("click", logGreyWheel);
    function logGreyWheel() {
        console.log("Sie wählten:");
        console.log(Aufgabe2_3_2.wheelArray[2]);
    }
})(Aufgabe2_3_2 || (Aufgabe2_3_2 = {}));
//# sourceMappingURL=script2.js.map