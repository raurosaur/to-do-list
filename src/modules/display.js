export const display = function(){
    const container = document.getElementById('parent-container');
    const newDisplay = document.createElement('div');
    newDisplay.classList.add('list-display');
    newDisplay.classList.add('display-none');
    container.appendChild(newDisplay);

    //Add Button
    const add = document.createElement('div');
    add.textContent = '+';
    add.classList.add('add');
    newDisplay.appendChild(add);

    return newDisplay;
};