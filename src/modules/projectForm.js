import {createForm} from './form.js';

export const projectForm = function(){
    const formEl = createForm('30%', '60%');
    const input = document.createElement('input');
    const button = document.createElement('div');

    button.textContent = 'Submit';
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Project Name');

    input.appendChild(button);
    formEl.appendChild(input);
}; 