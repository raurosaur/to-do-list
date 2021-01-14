"strict mode"
const listObj = function(name, desc, date, time){
    this.name = name;
    this.desc = desc;
    this.date = date;
    this.time = time;
};

const addElement = function(listObj, displayEL){
    const container = document.createElement('div');
    container.classList.add('to-do');
    displayEL.appendChild(container);

    //header
    const header = document.createElement('header'),
    h2 = document.createElement('h2'),
    checkbox = document.createElement('div');

    h2.textContent = listObj.name;

    checkbox.classList.add('checkbox');
    header.appendChild(h2);
    header.appendChild(checkbox);

    //Details Container
    const lcontainer = document.createElement('div'),
    desc = document.createElement('div'),
    deadline = document.createElement('div'),
    table = document.createElement('table');

    lcontainer.classList.add('container');
    desc.textContent = listObj.desc;
    const heading = document.createElement('tr'),
    body = document.createElement('tr');

    const date = document.createElement('th'),
    time = document.createElement('th');
    date.textContent = 'Date';
    time.textContent = 'Time';
    heading.appendChild(date);
    heading.appendChild(time);

    const dateCol = document.createElement('td'),
    timeCol = document.createElement('td');
    dateCol.textContent = listObj.date;
    timeCol.textContent = listObj.time;
    body.appendChild(dateCol);
    body.appendChild(timeCol);

    table.appendChild(heading);
    table.appendChild(body);
    lcontainer.appendChild(desc);
    deadline.appendChild(table);
    lcontainer.appendChild(deadline);

    //Append to Container
    container.appendChild(header);
    container.appendChild(lcontainer);

    //EventListener
    checkbox.addEventListener('click', (event) => {
        let box = event.target;
        box.classList.toggle('blue');
        if(box.classList.contains('blue')){
            box.parentElement.parentElement.style.opacity = '50%';
        }
        else{
            box.parentElement.parentElement.style.opacity = '100%';
        }
    });
};

export {addElement, listObj};