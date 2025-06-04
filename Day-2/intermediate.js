function createNewElement() {
    debugger
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var age = document.getElementById('age');
    var pTag = document.createElement('li');
    var pTagContent = document.createTextNode('Please enter both name and email.');
    var fullName = fname.value + ' ' + lname.value;
    if(fname.value == "" || lname.value == "") {
        pTag.appendChild(pTagContent);
        pTag.setAttribute('class', 'error');
        document.getElementById('data-list').appendChild(pTag);
    } else {
        var pTag = document.createElement('li');
        var pTagContent = document.createTextNode('Your name is ' + fname.value + ' ' + lname.value + ' and your age is ' + age.value);
        pTag.appendChild(pTagContent);
        pTag.setAttribute('class', 'success');
        document.getElementById('data-list').appendChild(pTag);
    }
}

function changeText() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var fullName = fname + ' ' + lname;
    var age = document.getElementById('age').value;

    if(fname.length == 0 || lname.length == 0) {
        console.log('Please enter your first and last name.');
        var spanTag = document.createElement('span');
        spanTag.setAttribute('class', 'error');
        var spanTagContent = document.createTextNode('Please enter your first and last name.');
        spanTag.appendChild(spanTagContent);
        document.getElementById('data-list').appendChild(spanTag);
    } else {
        console.log('Hello ' + fullName + ', you are ' + age + ' years old.');
        var pTag = document.createElement('p');
        var pTagContent = document.createTextNode('Hello ' + fullName + ', you are ' + age + ' years old.');
        pTag.setAttribute('class', 'success');        
        pTag.appendChild(pTagContent);
        document.getElementById('data-list').appendChild(pTag);
    }
    
}