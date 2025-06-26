let num = [10, 20, 30, 40, 50, 60];
let num2 = new Array(10, 20, 30, 40, 50, 60);

document.writeln("Array Length: " + num.length + "<br>");
document.writeln("Array Elements: " + num + "<br>");

document.writeln("using for loop: <br>");
for(let i = 0; i < num.length; i++) {
    document.writeln("Element at index " + i + ": " + num[i] + "<br>");
}

document.writeln("using for loop and in: retrieve using index<br>");
for(let i in num) {
    document.writeln("Element at index " + i + ": " + num[i] + "<br>");
}

document.writeln("using for loop and of: retrieve using values<br>");
for(let i of num) {
    document.writeln("Element: " + i + "<br>");
}

num.push(70); // Add an element at the end
num.unshift(5); // Add an element at the beginning
document.writeln("After adding elements: " + num + "<br>");
num.pop(); // Remove the last element
num.shift(); // Remove the first element
document.writeln("After removing elements: " + num + "<br>");

document.writeln("Different sepertor: <br>");
document.writeln(": " + num.join(" ") + "<br>");

document.writeln("Using forEach: arrow callback function <br>");
let displayValue = (value, index) => 
    document.writeln("Element at index " + index + ": " + value + "<br>");

document.writeln("Using forEach: regular function <br>");
num.forEach(function(value, index) {
    document.writeln("Element at index " + index + ": " + value + "<br>");
});

document.writeln("Using forEach: named function <br>");
num.forEach(displayValue);


