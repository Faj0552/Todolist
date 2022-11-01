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
        input.classList.add('item__input');
        input.type = 'text';


        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
      
        let completeButton = document.createElement('input');
        completeButton.type = 'checkbox';
        completeButton.classList.add('completeButton');

        

        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'Delete';
        removeButton.classList.add('removeButton');
        
        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(completeButton);
        itemBox.appendChild(removeButton);


        completeButton.addEventListener('click', () => {
            if (completeButton.checked == true ){
                input.classList.add('done');
                
            }
        
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
        alert ("Plese write somethings!")
});

let lists = [new Item("Lyssna på music"), new Item("Handla mat"), new Item("Läsa böcker")];









