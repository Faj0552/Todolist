let addButton = document.querySelector('.userAdd');
let inputValue = document.querySelector('.userInput');
let container = document.querySelector('.container');

class Item {
    constructor(itemName) {
        this.createInput(itemName);
    }
    createInput(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item__input');
        input.type = 'text';


        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        container.appendChild(itemBox);
        itemBox.appendChild(input);

        let completeButton = document.createElement('input');
        completeButton.type = 'checkbox';
        completeButton.classList.add('completeButton');
        itemBox.appendChild(completeButton);

        let removeButton = document.createElement('button');
        removeButton.textContent = "Delete"
        removeButton.classList.add('removeButton');
        itemBox.appendChild(removeButton);

        completeButton.addEventListener('click', () => {
            input.classList.add("line-through");
        });
        
        removeButton.addEventListener('click', () => this.remove(itemBox));
        
    }
    remove(itemBox) {
        container.removeChild(itemBox)
    }
}
addButton.addEventListener('click', () => {
    if (inputValue.value != "") {
        new Item(inputValue.value);
        inputValue.value = "";
    }
    else 
        alert ("Plese make your lists!")
});

new Item("Lyssna på music");
new Item("Handla mat");





