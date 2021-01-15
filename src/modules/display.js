export const display = function(name){
    //Get container and create display tab
    const container = document.getElementById('parent-container');
    const newDisplay = document.createElement('div');
    
    //Add classes
    newDisplay.classList.add('list-display','display-none');

    //Add Heading
    const h1 = document.createElement('h1');
    h1.textContent = name;
    h1.style.textAlign = 'center';

    //Add add Button
    const add = document.createElement('div');
    add.textContent = '+';
    add.classList.add('add');

    //Add Event Listener
    add.addEventListener('click', () => {
        document.querySelectorAll('.form-container')[1].classList.toggle('display-none');
    });
    //Append
    newDisplay.appendChild(h1);
    container.appendChild(newDisplay);
    newDisplay.appendChild(add);

    return newDisplay;
};