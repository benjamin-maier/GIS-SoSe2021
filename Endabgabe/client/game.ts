namespace Endabgabe {
    //Url für die Server-Verbindung
    let url: RequestInfo;
    function setUrl(): void {
        //url = "https://gissose-2021.herokuapp.com";
        url = "http://localhost:8100";
    }

    console.log("Spielseite wird angezeigt");

    window.addEventListener("load", getRandomImages);
    //window.addEventListener("load", placeCards);
    //window.addEventListener("load", startTimer);
    localStorage.clear();

    //getRandomImages();
    //placeCards();
    //startTimer();

    //Deklarationen für das Kartenspiel
    let rightCards: number = 0;
    //let rightCardArray: pictureFormularData[] = [];


    //Funktion, um die Bilder aus der DB zu holen und zufällig im Array zu speichern
    let randomImageArray: pictureFormularData[] = new Array;

    async function getRandomImages(): Promise<void> {

        setUrl();

        let enteredData: FormData = new FormData(document.forms[0]);
        url += "/getImages";

        let urlExtra: URLSearchParams = new URLSearchParams(<any>enteredData);
        url += "?" + urlExtra.toString();

        let returnedData: Response = await fetch(url);
        let imageArrayDatabank: pictureFormularData[] = await returnedData.json();
        console.log(imageArrayDatabank);


        //Random Karten aus dem Array suchen und in neues Array speichern
        while (randomImageArray.length < 15) {

            let playCard1: pictureFormularData = { pictureOrigin: "" };
            let playCard2: pictureFormularData = { pictureOrigin: "" };
            let picturePresent: boolean = false;
            let randomIndexNumber: number = 0;

            randomIndexNumber = Math.floor(Math.random() * imageArrayDatabank.length);

            //Verhindern, dass es zwei gleiche Pärchen im randomImageArray gibt
            if (randomImageArray.length == 0) {
                playCard1.pictureOrigin = imageArrayDatabank[randomIndexNumber].pictureOrigin;
                playCard2.pictureOrigin = imageArrayDatabank[randomIndexNumber].pictureOrigin;

                randomImageArray.push(playCard1);

                randomImageArray.push(playCard2);
            }

            else {
                for (let j = 0; j < randomImageArray.length; j++) {

                    if (imageArrayDatabank[randomIndexNumber].pictureOrigin == randomImageArray[j].pictureOrigin) {
                        picturePresent = true;
                        break;
                    }
                }

                if (picturePresent == false) {
                    playCard1.pictureOrigin = imageArrayDatabank[randomIndexNumber].pictureOrigin;
                    playCard2.pictureOrigin = imageArrayDatabank[randomIndexNumber].pictureOrigin;

                    randomImageArray.push(playCard1);
                    randomImageArray.push(playCard2);
                }
            }
        }
        shuffle(randomImageArray);

        //Die folgende Funktion ist Fremd-Code und stammt von: https://www.codegrepper.com/code-examples/javascript/shuffle+array+values+typescript
        function shuffle(_array: pictureFormularData[]) {
            let currentIndex = _array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = _array[currentIndex];
                _array[currentIndex] = _array[randomIndex];
                _array[randomIndex] = temporaryValue;
            }
            return _array;
        }
        //Ende Fremd-Code
        //Jetzt besteht das randomImageArray aus 8 zufälligen Paaren (16 Karten)
        placeCards();
    }
    console.log(randomImageArray);



    //Funktion, um die Bilder auf die 16 Tabellenplätze zu verteilen
    function placeCards(): void {

        startTimer();

        let clickedCardCounter: number = 0;
        let clickedCard1: HTMLImageElement = document.createElement("img");

        for (let i = 0; i < randomImageArray.length; i++) {

            let tablePlace: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById("place" + (i + 1));
            let gameImage: HTMLImageElement = document.createElement("img");

            gameImage.src = randomImageArray[i].pictureOrigin;
            gameImage.classList.add("hideImage");
            gameImage.classList.add("picture");
            tablePlace.appendChild(gameImage);
            //console.log(gameImage.src);


            //tablePlace.firstElementChild.addEventListener("click", openCard);


            tablePlace.firstElementChild.addEventListener("click", openCard);


            //Funktion, um ein Bild aufzudecken
            function openCard(): void {

                tablePlace.firstElementChild.addEventListener("click", openCard);


                clickedCardCounter++;

                gameImage.classList.remove("hideImage");
                tablePlace.firstElementChild.classList.add("hideImage");

                if (clickedCardCounter == 1) {
                    clickedCard1 = <HTMLImageElement>tablePlace.lastElementChild;
                }

                if (clickedCardCounter == 2) {

                    tablePlace.firstElementChild.removeEventListener("click", openCard);

                    if (clickedCard1.src == gameImage.src) {

                        //setTimeout(removeCards, 2000);
                        rightCards = rightCards + 2;
                        gameImage.classList.add("setOpacityDown");
                        clickedCard1.classList.add("setOpacityDown");

                    }
                    else {
                        //Die folgende Funktion ist Fremd-Code und stammt von: https://www.a-coding-project.de/ratgeber/javascript/delay
                        setTimeout(closeCard, 2000);
                        //Ende Fremd-Code
                    }
                    clickedCardCounter = 0;
                    console.log("Richtige Karten:" + rightCards);

                }
            }

            //Funktion um die Karten verschwinden zu lassen
            /*function removeCards(): void {
                rightCards = rightCards + 2;
                gameImage.classList.add("setOpacityDown");
                clickedCard1.classList.add("setOpacityDown");
            }*/


            //Funktion, um ein Bild zuzudecken
            function closeCard(): void {
                gameImage.classList.add("hideImage");
                clickedCard1.classList.add("hideImage");
                tablePlace.firstElementChild.classList.remove("hideImage");

                //let clickedCardBack: Element = clickedCard1.previousElementSibling;
                let clickedCardBack: HTMLImageElement = <HTMLImageElement>clickedCard1.previousElementSibling;
                clickedCardBack.classList.remove("hideImage");
            }
        }
    }


    //Startzeit wird genommen
    //Inspiriert von: https://www.javatpoint.com/typescript-date-object
    function startTimer(): Date {
        let startTime: Date = new Date();

        //Funktion um das Spiel zu beenden, auf die Score-Seite weiterzuleiten und die Zeit zu nehmen
        if (rightCards == 16) {
            endGame(startTime);
            window.location.href = "../html/registration.html";
        }
        return startTime;
    }


    //Funktion, um das Spiel zu beenden
    //Inspiriert von: https://www.javatpoint.com/typescript-date-object
    function endGame(_startTime: Date): void {
        let endTime: Date = new Date();
        let playTime: Number = endTime.getTime() - _startTime.getTime();

        localStorage.setItem("playedTime", playTime.toString());
        rightCards = 0;
        //window.location.href = "../html/registration.html";
    }
}