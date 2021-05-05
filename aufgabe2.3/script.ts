namespace Aufgabe2_3{

console.log("---------------");
console.log("AUFGABE 1:");

let y: number = 3;

/*document.addEventListener("click", addRect);
function addRect(event1: Event): void {
    y = 1;
    console.log("Button 1 wurde geklickt!");*/
    for (let i = 0; i < y; i++) {
        let div: HTMLDivElement = document.createElement("div");
        div.style.backgroundColor = "black";
        //let height1: number = Math.random() * 50;
        div.style.margin = "10px";
        div.style.height = "50px";
        div.style.width = "500px";
        document.body.appendChild(div);
        y+1;
    }

for (let i = 0; i < y; i++) {
    let div: HTMLDivElement = document.createElement("div");
    div.style.backgroundColor = "black";
    //let height1: number = Math.random() * 50;
    div.style.margin = "10px";
    div.style.height = "50px";
    div.style.width = "500px";
    document.body.appendChild(div);
}
}