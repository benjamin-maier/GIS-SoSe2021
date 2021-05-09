namespace Aufgabe2_3_1 {

    console.log("---------------");
    console.log("AUFGABE 1:");

    let addRecButton: HTMLElement = document.createElement("Button");
    let textRecButton: Text = document.createTextNode("add Rectangle");
    addRecButton.appendChild(textRecButton);
    document.body.appendChild(addRecButton);
    addRecButton.id = "RecButtId";

    let resetWindowButton: HTMLElement = document.createElement("Button");
    let textWinButton: Text = document.createTextNode("Clear");
    resetWindowButton.id = "resetButtId";

    resetWindowButton.appendChild(textWinButton);
    document.body.appendChild(resetWindowButton);

    document.getElementById("RecButtId").addEventListener("click", createDivRec);
    document.getElementById("resetButtId").addEventListener("click", clearPage);

    for (let i = 0; i < 3; i++) {
        createDivRec();
    }

    function clearPage(): void {
        window.location.reload();
    }

    function createDivRec(): void {

        let colors: String[] = ["grey", "red", "brown", "black"];
        let previousElement: HTMLElement = document.body;

        let div: HTMLDivElement = document.createElement("div");
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
}