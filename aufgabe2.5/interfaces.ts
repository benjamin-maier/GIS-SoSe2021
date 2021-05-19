namespace Aufgabe2_5 {
    
    //interface, welches auch für die communicate-Funktion mit json genutzt wird
    export interface Content {
        price: string;
        image: string;

    }

    //interface, welches dann als Array für die verschiedenen Konfigurationen genutzt wird
    export interface Unycicle {
        Wheel: Content[];
        Pole: Content[];
        Saddle: Content[];

    }
}