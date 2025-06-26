function* testFunction() {
    let x = 100;
    for(var i = 0; i < 10; i++) {
        yield i;
    }
    
    return x;
}

let showResult = () => {
    let generator= testFunction();
    var obj = {value: 0, done: false};
    let x = 0;
    console.log(obj);
    let objArray = [];
    while(obj.done == false) {
        obj = generator.next();
        var pTag = document.createElement('li');
        // var pTagContent = document.createTextNode(`Index ${x}: ${JSON.stringify(obj)}`);
        var pTagContent = document.createTextNode(`value: ${obj.value} status of function: ${obj.done}`)

        pTag.appendChild(pTagContent);
        document.getElementById('output').appendChild(pTag);
        
        console.log(`Value updated is : ${obj.value} and status is ${obj.done}`)
        console.log(obj);
        objArray.push(obj);
    }

    console.log(objArray);
}

let showInTable = () => {
    let generator = testFunction();

    var obj = {value: 0, done: false};
    let x = 0;
    let objArray = [];
    let tblHead = `<tr>
                        <th>Index</th>
                        <th>Value</th>
                        <th>Status</th>
                    </tr>`
    document.getElementById('thead').innerHTML = tblHead;

    while(obj.done == false) {
        obj = generator.next();
        var tblrow = document.createElement('tr');
        tblrow.setAttribute('class', 'text-center');
        tblrow.innerHTML = `<td>${x}</td>
                            <td>${obj.value}</td>
                            <td style="color: ${obj.done ? 'green': 'red'}">${obj.done.toString()}</td>`

        document.getElementById('tblData').appendChild(tblrow);
        x++;
    }
}

let clearAll = ()  => {
    document.getElementById('output').innerHTML = '';
    document.getElementById('thead').innerHTML = '';
    document.getElementById('tblData').innerHTML = '';
}