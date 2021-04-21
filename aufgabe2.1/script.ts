//* AUFGABE 1a
function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}
//* Im Browser wird Alles Klar? Logo! ausgegeben
//* Als Variablennamen zulässig sind alle Buchstaben sowie zusammenhängende Buchstabenkombinationen



//* AUFGABE 1c
function a2(): void {
    let x: string = "Alles";
    console.log(x);
}

a2();
func2();
a2();
func3();
a2();
func4();

function func2(): void {
    console.log("Gute!");
}
function func3(): void {
    console.log("klar?");
}
function func4(): void {
    console.log("Logo!");
}



//* AUFGABE 2
function a3(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}

a3();
//* Es werden die Zahlen 9-1 nacheinander ausgegeben
//* i wird mit 9 initialisiert, danach wird i ausgegeben und nach jedem Durchlauf i-1 abgezogen. So wird weitergamcht bis 1>0, da ab dann die while Schleife nicht mehr zutrifft



//* AUFGABE 3a
//* Meist lässt sich aus den Fehlermeldungen und logischem Denken schon einmal viele Fehler erschließen



//* AUFGABE 3b
//* Auch mit diesem Methoden liesen sich die Fehler in den meisten Fällen gut erschließen und verbessern



//* AUFGABE 4a
let x: string = "Hallo";
console.log(x);
func5(x);
console.log(x);
func6();
func7();
console.log(x);

function func5(y: string): void{
    y = "Bla";
    console.log(y);
}

function func6(): void{
    let x: string = "Blubb";
    console.log(x);
}

function func7(): void{
    x = "Test";
}
//* Ich denke der Code gibt folgendes aus: "Hallo" "Bla" "Hallo" "Blubb" "Test" "Hallo"
//* Ich lag weitestegehdn richtig. Allerdings übersah ich, dass x in func7 überschrieben wird und somit kein "Hallo" am Ende mehr ausgegeben wird



//* AUFGABE 4b
//* Einem Kommilitonen konnte ich den Unterschied zwischen den Variablen relativ gut erklären
//* "Normale Variablen" können einfach verwendet und überschrieben werden. Sie erhalten einen "einfachen" Wert und können damit genutzt werden.
//* Funktionen hingegen können zwar ebenfalls genutzt werden und in anderen Funktionen abgerufen werden, allerdings enthalten sie meist keinen "einfachen" Wert, sondern eine ausfürhbare Operation, welche nicht so einfach überschrieben werden kann



//* AUFGABE 5a