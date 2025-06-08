let names = ["Yashswai", "Sai Sudarshan", "Shubman", "KL Rahul", "Karun Nair", "Dhruv Jurel", "Ravindra", "Jasprit", "Mohammed", "Kuldeep", "Yuzvendra"];
document.writeln("Using forEach: arrow callback function <br>");
let displayName = (value, index) =>
    document.writeln("Element at index " + index + ": " + value + "<br>");

document.writeln("Using forEach: regular function <br>");
names.forEach(function (value, index) {
    document.writeln("Element at index " + index + ": " + value + "<br>");
});

document.writeln("Modifying value using map: named function <br>");
let modifyName = names.map((value, index) => "Mr. " + value);
modifyName.forEach((value, index) =>
    document.writeln("Element at index " + index + ": " + value + "<br>"));

document.writeln("Filter array: regular function <br>");
document.writeln("<p><b>Names endwith with 'an': </b></p><br>");
let filterNames = names.filter((value, index) => value.endsWith("an"));
document.writeln("<p><b>Filtered Names: </b>" + filterNames + "</p><br>");