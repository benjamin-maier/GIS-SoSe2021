namespace Aufgabe2_4 {

    //export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");

    export let optionsJSON: string = '{ "Wheel": [{"image": "../aufgabe2.4/Bilder/blackwheel.png", "price": "19,95€"}, {"image": "../aufgabe2.4/Bilder/brownwheel.png", "price": "21,95€"}, {"image": "../aufgabe2.4/Bilder/greywheel.png", "price": "20,95€"}], "Pole": [{"image": "../aufgabe2.4/Bilder/blackpole.png", "price": "12,95€"}, {"image": "../aufgabe2.4/Bilder/redpole.png", "price": "14,95€"}, {"image": "../aufgabe2.4/Bilder/yellowpole.png", "price": "16,95€"}], "Saddle": [{"image": "../aufgabe2.4/Bilder/blacksaddle.png", "price": "8,95€"}, {"image": "../aufgabe2.4/Bilder/redsaddle.png", "price": "11,95€"}, {"image": "../aufgabe2.4/Bilder/yellowsaddle.png", "price": "9,95€"}]}';

    export let myObj = JSON.parse(optionsJSON);

    //export let allWheels: Wheel[] = [{ price: "19,95€", wheelpicture: "../aufgabe2.4/Bilder/braunwaffel.png" }, { price: "21,95€", wheelpicture: "../aufgabe2.4/Bilder/orangewaffel.png" }, { price: "20,95€", wheelpicture: "../aufgabe2.4/Bilder/pinkwaffel.png" }];

    //export let allPoles: Pole[] = [{ price: "12,95€", polepicture: "../aufgabe2.4/Bilder/erdbeere.png" }, { price: "14,95€", polepicture: "../aufgabe2.4/Bilder/mango.png" }, { price: "16,95€", polepicture: "../aufgabe2.4/Bilder/schoko.png" }];

    //export let allSaddle: Saddle[] = [{ price: "8,95€", saddlepicture: "../aufgabe2.4/Bilder/sahne3.png" }, { price: "11,95€", saddlepicture: "../aufgabe2.4/Bilder/sahne2.png" }, { price: "9,95€", saddlepicture: "../aufgabe2.4/Bilder/sahne1.png" }];
}