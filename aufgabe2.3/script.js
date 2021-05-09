"use strict";
var Aufgabe2_3_1;
(function (Aufgabe2_3_1) {
    console.log("---------------");
    console.log("AUFGABE 1:");
    let addRecButton = document.createElement("Button");
    let textRecButton = document.createTextNode("add Rectangle");
    addRecButton.appendChild(textRecButton);
    document.body.appendChild(addRecButton);
    addRecButton.id = "RecButtId";
    let resetWindowButton = document.createElement("Button");
    let textWinButton = document.createTextNode("Clear");
    resetWindowButton.id = "resetButtId";
    resetWindowButton.appendChild(textWinButton);
    document.body.appendChild(resetWindowButton);
    document.getElementById("RecButtId").addEventListener("click", createDivRec);
    document.getElementById("resetButtId").addEventListener("click", clearPage);
    for (let i = 0; i < 3; i++) {
        createDivRec();
    }
    function clearPage() {
        window.location.reload();
    }
    function createDivRec() {
        let colors = ["grey", "red", "brown", "black"];
        let previousElement = document.body;
        let div = document.createElement("div");
        div.style.height = (Math.random() * 400).toString() + "px";
        div.style.width = (Math.random() * 400).toString() + "px";
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)].toString();
        div.style.position = "absolute";
        div.style.left = (Math.random() * 400).toString() + "px";
        div.style.right = (Math.random() * 400).toString() + "px";
        div.classList.add("rectangle");
        previousElement.appendChild(div);
        previousElement = div;
    }
})(Aufgabe2_3_1 || (Aufgabe2_3_1 = {}));
//# sourceMappingURL=script.js.map