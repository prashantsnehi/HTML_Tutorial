// function emailValidation() {
//     debugger
//     var email = document.getElementById('exampleInputEmail1').value;
//     var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     var demoDiv = document.getElementById('demo');
//     if(regx.test(email)) {
//         // alert('valid email');
//         // demoDiv.removeAttribute('style', 'display: none;');
//         // demoDiv.setAttribute('style', 'display: block;');
//         return true;
//     }

//     // alert('Invalid email');
//     // demoDiv.setAttribute('style', 'display: none;');
//     return false; 

// }

function emailValidation() {
    debugger
    var email = document.getElementById('exampleInputEmail1').value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var demoDiv = document.getElementById('emailError');
    demoDiv.innerHTML = '';
    if(regx.test(email)) {
        demoDiv.innerHTML = 'Email entered is valid';
        demoDiv.setAttribute('style', 'color: green;')
        return true;   
    }

    demoDiv.setAttribute('style', 'color: red;')
    demoDiv.innerHTML = 'Email entered is invalid';
    return false; 
}

var checkTextLimit = () => {
    debugger
    let inputText = document.getElementById('exampleFormControlTextarea1').value; 
    document.getElementById('textAreaTextCount').innerHTML = `${inputText.length} of 500`;
}