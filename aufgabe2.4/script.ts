namespace Aufgabe2_4 {

    function createWheelOptions(_wheel: Wheel): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "150px";
        div.style.marginLeft = "600px";
        let wheelpicture: HTMLImageElement = document.createElement("img");
        wheelpicture.src = _wheel.wheelpicture;
        wheelpicture.style.width = "100%";
        div.appendChild(wheelpicture);
        let chooseButton: HTMLElement = document.createElement("Button");
        let textChooseButton: Text = document.createTextNode(_wheel.price);
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.addEventListener("click", safewheel);
        chooseButton.dataset.price = _wheel.price;
        chooseButton.style.marginLeft = "600px";
        localStorage.setItem("Wheel", safewheel.toString());
        console.log(localStorage.getItem("Wheel" + "Test"));
        return div;
    }

    for (let i: number = 0; i < myObj.Wheel.length; i++) {
        let wheelElements: HTMLElement = createWheelOptions(myObj.Wheel[i]);
        document.body.appendChild(wheelElements);
        console.log(wheelElements);
        

    }

    function safewheel(_input: MouseEvent): void {
        let output: HTMLElement = <HTMLElement>_input.target;
        console.log(output.dataset.price);

        
    }
}