"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Url für die Server-Verbindung
    let url;
    function setUrl() {
        url = "https://gissose-2021.herokuapp.com";
        //url = "http://localhost:8100";
    }
    document.getElementById("home-button").addEventListener("click", goToHome);
    function goToHome() {
        window.location.href = "../html/index.html";
    }
    window.addEventListener("load", getRandomImages);
    localStorage.clear();
    //Deklarationen für das Kartenspiel
    let rightCards = 0;
    let startTime;
    //Startzeit wird genommen
    //Inspiriert von: https://www.javatpoint.com/typescript-date-object
    function startTimer() {
        startTime = new Date();
        return startTime;
    }
    //Funktion, um die Bilder aus der DB zu holen und zufällig im Array zu speichern
    let randomImageArray = new Array;
    async function getRandomImages() {
        setUrl();
        let enteredData = new FormData(document.forms[0]);
        url += "/getImages";
        let urlExtra = new URLSearchParams(enteredData);
        url += "?" + urlExtra.toString();
        let returnedData = await fetch(url);
        let imageArrayDatabank = await returnedData.json();
        //Random Karten aus dem Array suchen und in neues Array speichern
        while (randomImageArray.length < 15) {
            let playCard1 = { pictureOrigin: "" };
            let playCard2 = { pictureOrigin: "" };
            let picturePresent = false;
            let randomIndexNumber = 0;
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
        function shuffle(_array) {
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
    //Funktion, um die Bilder auf die 16 Tabellenplätze zu verteilen
    function placeCards() {
        startTimer();
        let clickedCardCounter = 0;
        let clickedCard1 = document.createElement("img");
        for (let i = 0; i < randomImageArray.length; i++) {
            let tablePlace = document.getElementById("place" + (i + 1));
            let gameImage = document.createElement("img");
            gameImage.src = randomImageArray[i].pictureOrigin;
            gameImage.classList.add("hideImage");
            gameImage.classList.add("picture");
            tablePlace.appendChild(gameImage);
            tablePlace.firstElementChild.addEventListener("click", openCard);
            //Funktion, um ein Bild aufzudecken
            function openCard() {
                clickedCardCounter++;
                gameImage.classList.remove("hideImage");
                tablePlace.firstElementChild.classList.add("hideImage");
                if (clickedCardCounter == 1) {
                    clickedCard1 = tablePlace.lastElementChild;
                }
                if (clickedCardCounter == 2) {
                    if (clickedCard1.src == gameImage.src) {
                        rightCards = rightCards + 2;
                        setTimeout(removeCards, 1000);
                    }
                    else {
                        //Die folgende Funktion ist Fremd-Code und stammt von: https://www.a-coding-project.de/ratgeber/javascript/delay
                        setTimeout(closeCard, 2000);
                        //Ende Fremd-Code
                    }
                    clickedCardCounter = 0;
                }
                if (rightCards == 16) {
                    window.location.href = "../html/registration.html";
                    endGame(startTime);
                }
            }
            //Funktion um die Karten verschwinden zu lassen
            function removeCards() {
                gameImage.classList.add("setOpacityDown");
                clickedCard1.classList.add("setOpacityDown");
            }
            //Funktion, um ein Bild zuzudecken
            function closeCard() {
                gameImage.classList.add("hideImage");
                clickedCard1.classList.add("hideImage");
                tablePlace.firstElementChild.classList.remove("hideImage");
                //let clickedCardBack: Element = clickedCard1.previousElementSibling;
                let clickedCardBack = clickedCard1.previousElementSibling;
                clickedCardBack.classList.remove("hideImage");
            }
        }
    }
    //Funktion, um das Spiel zu beenden
    //Inspiriert von: https://www.javatpoint.com/typescript-date-object
    function endGame(_startTime) {
        let endTime = new Date();
        let playTime = endTime.getTime() - _startTime.getTime();
        localStorage.setItem("playedTime", playTime.toString());
        console.log("Zeit ist:" + localStorage.getItem("playedTime"));
        rightCards = 0;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=game.js.map