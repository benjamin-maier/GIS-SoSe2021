namespace Aufgabe2_3_2 {

    console.log("---------------");
    console.log("AUFGABE 2c:");

    export let wheelArray: Wheel[] = [];

    /*let wheel1: Wheel = { color: "black", form: canvas.getContext("2d") };
    wheel1.form.fillStyle = "black";
    wheel1.form.beginPath();
    wheel1.form.arc(410, 240, 45, 0, 3 * Math.PI);
    wheel1.form.fill();
    wheelArray.push(wheel1);

    let wheel2: Wheel = { color: "brown", form: canvas.getContext("2d") };
    wheel2.form.fillStyle = "brown";
    wheel2.form.arc(410, 240, 45, 0, 3 * Math.PI);
    wheel2.form.fill();
    wheelArray.push(wheel2);

    let wheel3: Wheel = { color: "grey", form: canvas.getContext("2d") };
    wheel3.form.fillStyle = "grey";
    wheel3.form.arc(410, 240, 45, 0, 3 * Math.PI);
    wheel3.form.fill();
    wheelArray.push(wheel3);*/

    let wheel1: Wheel = { color: "black", price: "19,95€" };
    /*let previousElement: HTMLElement = document.body;
    let div: HTMLDivElement = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.borderRadius = "50%";
    div.style.width = "20px";
    div.style.height = "20px";
    div.style.left = "20%";
    div.style.position = "absolute";*/
    wheelArray.push(wheel1);
    /*previousElement.appendChild(div);
    previousElement = div;*/

    let wheel2: Wheel = { color: "brown", price: "21,95€" };
    /*let div2: HTMLDivElement = document.createElement("div");
    div2.style.backgroundColor = "black";
    div2.style.borderRadius = "50%";
    div2.style.width = "20px";
    div2.style.height = "20px";
    div2.style.left = "40%";
    div.style.position = "absolute";*/
    wheelArray.push(wheel2);

    let wheel3: Wheel = { color: "grey", price: "16,95€" };
    /*let div3: HTMLDivElement = document.createElement("div");
    div3.style.backgroundColor = "black";
    div3.style.borderRadius = "50%";
    div3.style.width = "20px";
    div3.style.height = "20px";
    div3.style.left = "60%";
    div.style.position = "absolute";*/
    wheelArray.push(wheel3);

    let colors: String[] = ["black", "black", "brown", "grey"];

    for (let i = 0; i < 3; i++) {
        let previousElement: HTMLElement = document.body;

        let div: HTMLDivElement = document.createElement("div");
        div.style.backgroundColor = colors[i + 1].toString();
        div.style.borderRadius = "50%";
        div.style.width = "40px";
        div.style.height = "40px";
        div.style.marginTop = "15px";
        div.style.marginLeft = "48%";
        previousElement.appendChild(div);
        previousElement = div;
    }
    

   /* function createDivRec(): void {

        let colors: String[] = ["black", "brown", "grey"];
        let previousElement: HTMLElement = document.body;

        let div: HTMLDivElement = document.createElement("div");
        div.style.backgroundColor = "black";
        div.style.borderRadius = "50%";
        div.style.width = "20px";
        div.style.height = "20px";
        div.style.left = "20%";
        div.style.position = "absolute";
        previousElement.appendChild(div);
        previousElement = div;
    }*/




























}