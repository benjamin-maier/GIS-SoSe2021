"use strict";
var Aufgabe2_2;
(function (Aufgabe2_2) {
    console.log("----------");
    console.log("AUFGABE 1a:");
    function min(numberArray1) {
        let minimum;
        for (let i = 1; i < numberArray1.length; i++) {
            if (i < minimum) {
                i = minimum;
            }
        }
        console.log("Kleinste Zahl ist: " + minimum);
    }
    min([1, 6, 3, 8, 12]);
    // console.log("Das Minimum ist: " + Math.min(2, 3, 1));
    console.log("----------");
    console.log("AUFGABE 1b:");
    function isEven(a1) {
        if (a1 % 2 == 0) {
            console.log("true");
        }
        if (a1 % 2 != 0) {
            console.log("false");
        }
    }
    isEven(50);
    // Bei -1 kommt ebenfalls "false" heraus, da die Zahl ungerade ist
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
    function backwards() {
    }
})(Aufgabe2_2 || (Aufgabe2_2 = {}));
//# sourceMappingURL=script.js.map