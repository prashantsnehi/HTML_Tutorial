let createNewElement = () => {
    for (let i = 0; i < 4; i++) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'form-group');
        newDiv.setAttribute('id', 'div-' + i);
        newDiv.setAttribute('class', 'col-3 mb-3 p-2');
        document.getElementById('data-list').appendChild(newDiv);

        var newLabel = document.createElement('label');
        newLabel.setAttribute('for', 'input-' + i);
        newLabel.setAttribute('class', 'form-label');
        newLabel.innerHTML = 'Input ' + (i + 1);
    
        var newElement = document.createElement('input');
        newElement.setAttribute('type', 'text');
        newElement.setAttribute('placeholder', 'Enter text here');
        newElement.setAttribute('class', 'form-control');
        newElement.setAttribute('id', 'input-' + i);
        document.getElementById('div-'+i).appendChild(newLabel);
        document.getElementById('div-'+i).appendChild(newElement);
    }
}