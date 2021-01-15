import { addElement, listObj } from './listElement.js';
import {display} from './display.js';

/*
    * add project tab
    * query project tabs
    * update query
*/
//Adds new project tab
const addTab = function(name){
    //Get project list and create new Tab
    const projects = document.querySelector('.lists'); 
    const tab = document.createElement('div');

    //Add class and content
    tab.classList.add('tabs');
    tab.textContent = name;

    //Append
    projects.appendChild(tab);
};

//Add Displays Initially & event listener
const addDisplay = function(){
    const list = document.querySelectorAll('.tabs');
    const query = [];

    for(let el of list){
        query.push(
            [el, display(el.textContent)]
        );
        el.addEventListener('click', () => {
            toggleDisplay(getDisplay(el,query), query)
        });
    }
    
    return query;
}
//looks for any new Tabs
const queryTabs = function(query){
    if(!query)
        query = addDisplay();
    const list = document.querySelectorAll('.tabs');
    
    if(list.length > query.length){
        const newElement = list[list.length - 1];
        query.push([newElement, display(newElement.textContent)]);
        newElement.addEventListener('click', () => {
            toggleDisplay(getDisplay(newElement, query), query)
        });
    }
    
    return query;
}


const toggleDisplay = function(el, query){
    for(let i of query){
        if(!i[1].classList.contains('display-none'))
            i[1].classList.add('display-none');
    }
    el.classList.remove('display-none');
}

const getDisplay = function(el, query){
    for(let e of query){
        if(e[0] === el)
            return e[1];
    }
}
export {addTab, addDisplay, queryTabs};