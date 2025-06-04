// var tagCount = document.getElementsByTagName('h1').length;
// for(var i = 0; i < tagCount; i++) {
//     //document.getElementsByTagName('h1')[i].innerHTML = 'Hello World';
//     console.log(document.getElementsByTagName('h1')[i].innerHTML);
// }

function changeH1Text() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var fullName = fname + ' ' + lname;
    var age = document.getElementById('age').value;

    if(fname.length == 0 || lname.length == 0) {
        console.log('Please enter your first and last name.');
        var spanTag = document.createElement('span');
        spanTag.setAttribute('class', 'abc');
        var spanTagContent = document.createTextNode('Please enter your first and last name.');
        spanTag.appendChild(spanTagContent);
        document.getElementById('error').appendChild(spanTag);
    } else {
        console.log('Hello ' + fullName + ', you are ' + age + ' years old.');
        var pTag = document.createElement('p');
        var pTagContent = document.createTextNode('Hello ' + fullName + ', you are ' + age + ' years old.');
        pTag.setAttribute('class', 'xyz');        
        pTag.appendChild(pTagContent);
        document.getElementById('result').appendChild(pTag);
    }
    
}

