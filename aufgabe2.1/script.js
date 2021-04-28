"use strict";
var Aufgabe2_1;
(function (Aufgabe2_1) {
    console.log("-----------------");
    console.log("AUFGABE 1a:");
    //* AUFGABE 1a
    function a1() {
        let x = "Alles";
        console.log(x);
        func1();
        console.log("Logo!");
    }
    a1();
    function func1() {
        console.log("Klar?");
    }
    //* Im Browser wird Alles Klar? Logo! ausgegeben
    //* Als Variablennamen zulässig sind alle Buchstaben sowie zusammenhängende Buchstabenkombinationen
    console.log("-----------------");
    console.log("AUFGABE 1c:");
    //* AUFGABE 1c
    function a2() {
        let x = "Alles";
        console.log(x);
    }
    a2();
    func2();
    a2();
    func3();
    a2();
    func4();
    function func2() {
        console.log("Gute!");
    }
    function func3() {
        console.log("klar?");
    }
    function func4() {
        console.log("Logo!");
    }
    console.log("-----------------");
    console.log("AUFGABE 2:");
    //* AUFGABE 2
    function a3() {
        let i = 9;
        do {
            console.log(i);
            i = i - 1;
        } while (i > 0);
    }
    a3();
    //* Es werden die Zahlen 9-1 nacheinander ausgegeben
    //* i wird mit 9 initialisiert, danach wird i ausgegeben und nach jedem Durchlauf i-1 abgezogen. So wird weitergamcht bis 1>0, da ab dann die while Schleife nicht mehr zutrifft
    //* AUFGABE 3a
    //* Meist lässt sich aus den Fehlermeldungen und logischem Denken schon einmal viele Fehler erschließen
    //* AUFGABE 3b
    //* Auch mit diesem Methoden liesen sich die Fehler in den meisten Fällen gut erschließen und verbessern
    console.log("-----------------");
    console.log("AUFGABE 4a:");
    //* AUFGABE 4a
    let x = "Hallo";
    console.log(x);
    func5(x);
    console.log(x);
    func6();
    func7();
    console.log(x);
    function func5(y) {
        y = "Bla";
        console.log(y);
    }
    function func6() {
        let x = "Blubb";
        console.log(x);
    }
    function func7() {
        x = "Test";
    }
    //* Ich denke der Code gibt folgendes aus: "Hallo" "Bla" "Hallo" "Blubb" "Test" "Hallo"
    //* Ich lag weitestegehdn richtig. Allerdings übersah ich, dass x in func7 überschrieben wird und somit kein "Hallo" am Ende mehr ausgegeben wird
    //* AUFGABE 4b
    //* Einem Kommilitonen konnte ich den Unterschied zwischen den Variablen relativ gut erklären
    //* "Normale Variablen" können einfach verwendet und überschrieben werden. Sie erhalten einen "einfachen" Wert und können damit genutzt werden.
    //* Funktionen hingegen können zwar ebenfalls genutzt werden und in anderen Funktionen abgerufen werden, allerdings enthalten sie meist keinen "einfachen" Wert, sondern eine ausfürhbare Operation, welche nicht so einfach überschrieben werden kann
    console.log("-----------------");
    console.log("AUFGABE 5a:");
    //* AUFGABE 5a
    function multiply(x, y) {
        console.log(x * y);
    }
    multiply(2, 4);
    //* Beim Aufruf der Funktion werden Parameter x und y übergeben. Deren Produkt wird anschließend ausgegeben
    console.log("-----------------");
    console.log("AUFGABE 5b:");
    //* AUFGABE 5b
    function grossezahlfinden(x, y) {
        if (x > y) {
            console.log("Größere Zahl ist x:" + x);
        }
        if (x < y) {
            console.log("Größere Zahl ist y:" + y);
        }
    }
    grossezahlfinden(10, 15);
    //* Die Funktion prüft mithilfe zweier if-Bedingungen, welche der beiden Zahlen größer ist. Diese wird anschließend ausgegeben.
    console.log("-----------------");
    console.log("AUFGABE 5c:");
    //* AUFGABE 5c
    function zusammenzaehlen() {
        let i = 1;
        let a = 0;
        while (i <= 100) {
            a += i;
            i++;
        }
        console.log(a);
    }
    zusammenzaehlen();
    //* Die Schleife soll 100 mal durchlaufen werden. Hierbei soll das neue i immer zum vorhergehenden dazugezählt werden. Am Ende soll das Produkt ausgegeben werden.
    console.log("-----------------");
    console.log("AUFGABE 5d:");
    // AUFGABE 5d
    for (let i = 0; i < 10; i++) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        console.log(getRandomInt(101));
    }
    //* Die for-Schleife lässt die Funktion 10x durchlaufen. In dieser wird jeweils eine Zufallszahl zwischen 0 und 100 generiert und ausgegeben.
    console.log("-----------------");
    console.log("AUFGABE 5e:");
    //* AUFGABE 5e
    function factorial(n) {
        let f = 1;
        if (n < 1) {
            f = 1;
            console.log(f);
        }
        if (n > 1) {
            for (let i = 1; i <= n; i++) {
                f = f * i;
            }
            console.log(f);
        }
    }
    factorial(8);
    //* Mit den beiden if-Bedingunen wird der Fall n=1 abgefangen. Ist n nicht 1, wird in der for-Schleife die Fakultät berechnet und entsprechend ausgegeben.
    console.log("-----------------");
    console.log("AUFGABE 5f:");
    //* AUFGABE 5f
    function leapyears() {
        for (let i = 1900; i <= 2021; i++) {
            if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
                console.log(i);
            }
        }
    }
    leapyears();
    //* i wird gleich 1900 (Startjahr) gesetzt und in der for-Schleife bis 2021 (heute) hochgezählt. Wenn es durch 4, aber nicht durch 100, oder durch 400 teilbar ist, wird es in der Konsole ausgegeben.
    console.log("-----------------");
    console.log("AUFGABE 6a:");
    //AUFGABE 6a
    function rautezeichen() {
        let r = "#";
        for (let i = 1; i <= 7; i++) {
            console.log(r);
            r = r + "#";
        }
    }
    rautezeichen();
    //* Die for-Schleife geht 7x durch und r wird ausgegeben. Nach jedem Durchgang wird r ein # hinzugefügt.
    console.log("-----------------");
    console.log("AUFGABE 6b:");
    //* AUFGABE 6b
    function zahlenbis100() {
        for (let i = 1; i <= 100; i++) {
            if (i % 3 == 0) {
                console.log("Fizz");
            }
            else if (i % 5 == 0) {
                console.log("Buzz");
            }
            else if (i % 3 != 0 && i % 5 != 0) {
                console.log(i);
            }
        }
    }
    zahlenbis100();
    //* Die for-Schleife geht die Zahlen von 1-100 durch. Die if-Bedingunen überprüfen auf Teilbarkeit und geben die Wörter entsprechend aus.
    console.log("-----------------");
    console.log("AUFGABE 6c:");
    //* AUFGABE 6c
    function zahlenbis100_2() {
        for (let i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 != 0) {
                console.log("Fizz");
            }
            if (i % 5 == 0 && i % 3 != 0) {
                console.log("Buzz");
            }
            if (i % 3 != 0 && i % 5 != 0) {
                console.log(i);
            }
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("FizzBuzz");
            }
        }
    }
    zahlenbis100_2();
    //* Die for-Schleife geht die Zahlen von 1-100 durch. Die if-Bedingunen überprüfen auf Teilbarkeit und geben die Wörter entsprechend aus.
    console.log("-----------------");
    console.log("AUFGABE 6d:");
    //* AUFGABE 6d
    /*function schachbrett(): void{
        let s: string = " # # # #";
        let s2: string = "# # # # ";
        for (let i = 1; i < 8; i++) {
            if(i % 2 != 0){
                console.log(s);
            }
            if(i % 2 == 0){
                console.log(s2);
            }
        }
    }
    schachbrett();*/
    function schachbrett() {
        let s = " # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n# # # # ";
        console.log(s);
    }
    schachbrett();
    console.log("-----------------");
    console.log("AUFGABE 6e:");
    //* AUFGABE 6e
    function schachbrett2(h, b) {
        let s = " #";
        let s2 = "# ";
        for (let i = 1; i < b; i++) {
            s = s + " #";
        }
        for (let i = 1; i < b; i++) {
            s2 = s2 + "# ";
        }
        for (let i = 0; i < h; i++) {
            if (i % 2 == 0) {
                console.log(s2);
            }
            if (i % 2 != 0) {
                console.log(s);
            }
        }
    }
    schachbrett2(11, 3);
    //* Mit der Variable h kann die Höhe des Schachbrettes reguliert werden, da diese durch die for-Schleife gesteuert wird. Mit der Variable b wird die Breit des Brettes ebenfalls durch eine for-Schleife geregelt. Mit zwei if-Bedingungen wird außerdem zwischen den beiden Zeilen unterschieden.
})(Aufgabe2_1 || (Aufgabe2_1 = {}));
//# sourceMappingURL=script.js.map