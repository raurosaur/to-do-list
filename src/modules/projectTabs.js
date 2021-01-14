import { addElement, listObj } from './listElement.js';
import {display} from './display.js';

export const projectTabs = function(){
    let projects = document.getElementsByClassName('tabs');
    projects = [].slice.call(projects);
    const displayBar = projects.map(el => [el, display()]);
    //Heading
    displayBar.forEach(e => {
        const h1 = document.createElement('h1');
        h1.style.textAlign = 'center';
        h1.textContent = e[0].textContent;
        e[1].appendChild(h1);
    });
    //Toggle Display
    projects.forEach(el => {
        el.addEventListener('click', (event) => {
            displayBar.forEach(e => {
                if(e[0] === event.target)
                    e[1].classList.remove('display-none');
                else 
                    e[1].classList.add('display-none');
            });
        })    
    });
    //Task Event Listener
    let testTask = new listObj('Heading', 'A test case', '20 Jan 2021', '7:00 am');
    displayBar.forEach(el => {
        el[1].getElementsByClassName('add')[0].addEventListener('click', () => {
            addElement(testTask, el[1]);
        });
    });
};
