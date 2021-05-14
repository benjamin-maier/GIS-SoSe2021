namespace Aufgabe2_4 {
    
    export interface Unycicle {
        image: string;
        price: string;
    }
    
    export interface customUnycicle {
        wheel: Wheel;
        pole: Pole;
        saddle: Saddle;

    }
    export interface Wheel {
        wheelpicture: string;
        price: string;

    }

    export interface Pole {
        polepicture: string;
        price: string;


    }
    export interface Saddle {
        saddlepicture: string;
        price: string;


    }
}