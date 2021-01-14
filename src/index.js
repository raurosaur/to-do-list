import "./style/index.scss";
import {projectTabs} from './modules/projectTabs.js';
import { addElement } from "./modules/listElement";
import { projectForm } from './modules/projectForm.js';


//Function Calls
projectTabs();
projectForm();
document.querySelector('.tabs').click();

//Project Form
//createForm('70%', '35%');

//Add Event Listener
const addProject = document.getElementsByClassName('add');
addProject[0].addEventListener('click', () => {
    document.body.querySelector('.form-container').style.display = 'flex';
});

//Close Button
const close = document.querySelectorAll('.close');
close.forEach(el => {
    el.addEventListener('click', (event) => {
        console.log('okay');
        event.target.parentElement.parentElement.style.display = 'none';
    });
});
