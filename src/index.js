import "./style/index.scss";
import { addTab, addDisplay, queryTabs } from './modules/projectTabs.js';
import { addElement, listObj } from "./modules/listElement";
import { convertDate, convertTime } from './modules/converter';
//toggle function
function toggleDisplay(el){
    el.classList.toggle('display-none');
}
//Function Calls
let query = queryTabs();
console.table(query);
//Form 
const form = document.querySelectorAll('.form-container');
const submit = document.querySelectorAll('button');

//Add Event Listener
const add = document.getElementsByClassName('add');

//Project Addition
add[0].addEventListener('click', () => {
    toggleDisplay(form[0]);
});

//Add Submit Event Listener
submit[0].addEventListener('click', () => {
    const name = document.getElementById('name').value;
    if(!name){
        alert('Enter Valid Name');
        return;
    }
    else{
        addTab(name);
        query = queryTabs(query);
    }
    toggleDisplay(form[0]);
});

//Task Addition
submit[1].addEventListener('click', () => {
    const values = [].slice.call(form[1].querySelectorAll('input'));
    const input = values.map(el => el.value);
    if (input[2])input[2] = convertDate(input[2]);
    if (input[3])input[3] = convertTime(input[3]);
    const obj = new listObj(...input);
    for(let i of document.querySelectorAll('.list-display'))
        if(!i.classList.contains('display-none')){
            addElement(obj, i);
            break;
        }
    values.forEach(el => {el.value = ''});
    toggleDisplay(form[1]);
});

//Close Button
const close = document.querySelectorAll('.close');
close.forEach(el => {
    el.addEventListener('click', (event) => {
        toggleDisplay(event.target.parentElement.parentElement);
    });
});

//Click
document.querySelector('.tabs').click();