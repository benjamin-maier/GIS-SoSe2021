namespace Aufgabe2_3_2 {

    console.log("---------------");
    console.log("AUFGABE 2a & b:");

    export let UnicycleArray: Unicycle [] = [];

    export interface Unicycle {
        wheel: Wheel;
        pole: Pole;
        saddle: Saddle;
    }
    export interface Wheel {
        color: string;
        price: string;
    }
    export interface Pole {
        color: string;
        price: string;
    }
    export interface Saddle {
        color: string;
        price: string;
    }
    let addblackWheelButton: HTMLElement = document.createElement("Button");
    let textblackWheelButton: Text = document.createTextNode("Schwarz");
    addblackWheelButton.appendChild(textblackWheelButton);
    document.body.appendChild(addblackWheelButton);
    addblackWheelButton.id = "blackWheelButtonID";

    document.getElementById("blackWheelButtonID").addEventListener("click", logBlackWheel);

    function logBlackWheel(): void{
        console.log("Sie wählten:");
        console.log(wheelArray[0]);
    }

    let addbrownWheelButton: HTMLElement = document.createElement("Button");
    let textbrownWheelButton: Text = document.createTextNode("Braun");
    addbrownWheelButton.appendChild(textbrownWheelButton);
    document.body.appendChild(addbrownWheelButton);
    addbrownWheelButton.id = "brownWheelButtonID";

    document.getElementById("brownWheelButtonID").addEventListener("click", logBrownWheel);

    function logBrownWheel(): void{
        console.log("Sie wählten:");
        console.log(wheelArray[1]);
    }

    let addgreyWheelButton: HTMLElement = document.createElement("Button");
    let textgreyWheelButton: Text = document.createTextNode("Grau");
    addgreyWheelButton.appendChild(textgreyWheelButton);
    document.body.appendChild(addgreyWheelButton);
    addgreyWheelButton.id = "greyWheelButtonID";

    document.getElementById("greyWheelButtonID").addEventListener("click", logGreyWheel);

    function logGreyWheel(): void{
        console.log("Sie wählten:");
        console.log(wheelArray[2]);
    }
}