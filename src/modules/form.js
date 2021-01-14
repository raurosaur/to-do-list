export const createForm = function(height, width){
    const parent = document.createElement('div');
    parent.classList.add('form-container');

    const form = document.createElement('div');
    form.classList.add('form');

    const close = document.createElement('div');
    close.classList.add('close');
    close.textContent = '+';

    form.style.height = `${height}%`;
    form.style.width = `${width}%`;

    form.appendChild(close);
    parent.appendChild(form);
    document.body.appendChild(parent);

    return form;
}