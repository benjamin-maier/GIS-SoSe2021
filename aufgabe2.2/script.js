"use strict";
var Aufgabe2_2;
(function (Aufgabe2_2) {
    //rectangleArray[Math.random() * rectangleArray.length].drawRect(Rectangle);
    //this.rectangleArray[Math.floor(Math.random() * this.rectangleArray.length)].drawRect();
    console.log("----------");
    console.log("AUFGABE 1a:");
    function min(numberArray1) {
        let minimum = numberArray1[0];
        for (let i = 0; i < numberArray1.length; i++) {
            if (numberArray1[i] < minimum) {
                numberArray1[i] = minimum;
            }
        }
        console.log("Kleinste Zahl ist: " + minimum);
    }
    min([1, 6, 3, 8, 12]);
    // Das Array wird durchlaufen und es wird überprüft, ob nachfolgende Stellen kleiner sind als die erste. Am Ende wird das minimum ausgegeben
    console.log("----------");
    console.log("AUFGABE 1b:");
    function isEven(a1) {
        a1 = Math.abs(a1);
        if (a1 == 0) {
            return true;
        }
        if (a1 == 1) {
            return false;
        }
        return isEven(a1 - 2);
    }
    console.log(isEven(50));
    // Mit den beiden if-Bedingungen wird jeweils überprüft, ob die Zahl gerade oder ungerade ist (==0 oder ==1) und true bzw. false zurückgegeben
    // Ohne das Math.abs würden negative Werte keine ordentliche Rückgabe zustande bringen, da die Funktion damit nicht umgehen könnte
    console.log("----------");
    console.log("AUFGABE 1c:");
    class Student {
        constructor(name, vorname, alter, matrikelnummer) {
            this.name = name;
            this.vorname = vorname;
            this.alter = alter;
            this.matrikelnummer = matrikelnummer;
        }
    }
    let student1 = {
        name: "Maier",
        vorname: "Benjamin",
        alter: 18,
        matrikelnummer: 267210
    };
    let student2 = {
        name: "Roher",
        vorname: "Hans",
        alter: 21,
        matrikelnummer: 269358
    };
    let student3 = {
        name: "Lesser",
        vorname: "Karin",
        alter: 19,
        matrikelnummer: 250537
    };
    let studentenArray = [];
    studentenArray.push(student1);
    studentenArray.push(student2);
    studentenArray.push(student3);
    studentenArray.push({ name: "Baier", vorname: "Nico", alter: 21, matrikelnummer: 238952 });
    console.log(student1.name);
    console.log(student2.alter);
    function showInfo(Student) {
        console.log(Student.name);
        console.log(Student.vorname);
        console.log(Student.alter);
        console.log(Student.matrikelnummer);
    }
    showInfo(student1);
    showInfo(student2);
    showInfo(student3);
    console.log("----------");
    console.log("AUFGABE 2a:");
    function backwards(arr) {
        let arrBack = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            arrBack.push(arr[i]);
        }
        return arrBack;
    }
    // Die Funktion geht das array von hinten durch und fügt die einzelnen Werte einem neuen array hinzu. Diese wird anschließend ausgegeben
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack = backwards(arr);
    console.log(arr);
    console.log(arrBack);
    console.log("----------");
    console.log("AUFGABE 2b:");
    function join(array1, array2) {
        for (let i = 0; i < array2.length; i++) {
            array1.push(array2[i]);
        }
        return array1;
    }
    console.log(join([3, 5, 9, 8], [2, 17, 12, 7]));
    // array2 wird durchlaufen und fügt dem array 1 mit .push seine Werte hinten an. Dieses wird dann ausgegeben
    console.log("----------");
    console.log("AUFGABE 2c:");
    function split(numberArray3, i1, i2) {
        if (i1 <= numberArray3.length && i2 <= numberArray3.length) {
            console.log(numberArray3.slice(i1, i2));
        }
        else if (i1 > numberArray3.length || i2 > numberArray3.length || i1 < 0 || i2 < 0) {
            console.log("Tut mir leid, diese Indizes scheint es nicht zu geben! :(");
        }
    }
    split([3, 7, 2, 9, 18, 27, 5, 12], 2, 5);
    // Das Array wird durchlaufen und mit .slice und den beiden Indizes wird das Array geteilt und ausgegeben
    // Überprüft werden sollte bei den Indizes, ob diese zu hoch sind (nicht mehr vorhanden) oder kleiner 0 sind (ebenfalls nicht vorhanden). In diesem Fall kann keine Ausgabe erfolegn und die Funktion springt in das else
    console.log("----------");
    console.log("AUFGABE 3a:");
    let canvas1 = document.getElementById("myCanvas1");
    let context1 = canvas1.getContext("2d");
    context1.lineWidth = 10;
    //Himmel
    context1.fillStyle = "#06679c";
    context1.fillRect(0, 0, 500, 320);
    // Boden
    context1.fillStyle = "#004a0f";
    context1.fillRect(0, 300, 500, 60);
    // Fassade
    context1.fillStyle = "#000000";
    context1.fillRect(150, 240, 150, 110);
    // Haustüre
    context1.fillStyle = "#66451d";
    context1.fillRect(205, 290, 40, 60);
    // Fenster 1
    context1.fillStyle = "#87edff";
    context1.fillRect(170, 255, 40, 30);
    // Fenster 2
    context1.fillStyle = "#87edff";
    context1.fillRect(240, 255, 40, 30);
    // Dach
    let rooftop = new Path2D();
    rooftop.moveTo(120, 240);
    rooftop.lineTo(220, 140);
    rooftop.lineTo(330, 240);
    rooftop.lineTo(250, 240);
    rooftop.closePath();
    context1.fillStyle = "#805140";
    context1.fill(rooftop);
    // Baumstamm
    context1.fillStyle = "#6e5d5d";
    context1.fillRect(400, 270, 20, 80);
    // Baumkrone
    let treetop = new Path2D();
    treetop.arc(410, 240, 45, 0, 3 * Math.PI);
    context1.fillStyle = "#7b9e78";
    context1.fill(treetop);
    //Wolke 1
    let cloud1 = new Path2D();
    cloud1.arc(60, 60, 30, 0, 2 * Math.PI);
    context1.lineWidth = 3;
    context1.fillStyle = "#cccccc";
    context1.fill(cloud1);
    //Wolke 2
    let cloud2 = new Path2D();
    cloud2.arc(90, 45, 30, 0, 2 * Math.PI);
    context1.fill(cloud2);
    //Wolke 3
    let cloud3 = new Path2D();
    cloud3.arc(90, 68, 30, 0, 2 * Math.PI);
    context1.fill(cloud3);
    //Wolke 4
    let cloud4 = new Path2D();
    cloud4.arc(120, 60, 30, 0, 2 * Math.PI);
    context1.fill(cloud4);
    //Wolke 5
    let cloud5 = new Path2D();
    cloud5.arc(320, 100, 30, 0, 2 * Math.PI);
    context1.fill(cloud5);
    //Wolke 6
    let cloud6 = new Path2D();
    cloud6.arc(340, 90, 30, 0, 2 * Math.PI);
    context1.fill(cloud6);
    //Wolke 7
    let cloud7 = new Path2D();
    cloud7.arc(350, 110, 30, 0, 2 * Math.PI);
    context1.fill(cloud7);
    console.log("----------");
    console.log("AUFGABE 3b:");
    let canvas2 = document.getElementById("myCanvas2");
    let context2 = canvas2.getContext("2d");
    context2.lineWidth = 10;
    class Rectangle {
        constructor() {
            this.createRect();
        }
        //--------------------
        // AUFGABE 3c
        createRect() {
            let rectangle1 = new Path2D();
            rectangle1.closePath();
            context2.fillStyle = "#00000";
            context2.fillRect((Math.floor(Math.random() * 400)), (Math.floor(Math.random() * 400)), (Math.floor(Math.random() * 400)), (Math.floor(Math.random() * 400)));
        }
        //--------------------
        // AUFGABE 3d
        drawRect() {
            let rectangle2 = new Path2D();
            rectangle2.closePath();
            context2.fillStyle = "#00000";
            context2.fillRect(this.side1, this.side2, this.side3, this.side4);
        }
    }
    //--------------------
    // AUFGABE 3e
    let rectangleArray = [new Rectangle(), new Rectangle(), new Rectangle()];
    for (let i = 0; i < rectangleArray.length; i++) {
        rectangleArray[(Math.random() * rectangleArray.length)].drawRect();
    }
})(Aufgabe2_2 || (Aufgabe2_2 = {}));
//# sourceMappingURL=script.js.map