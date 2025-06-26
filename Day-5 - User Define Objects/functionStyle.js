let product = function(pid, name, price, quantity) {
    this.pid = pid;
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.display = function() {
        document.writeln("<strong>Product ID: </strong>" + this.pid + "<br>");
        document.writeln("<strong>Product Name: </strong>" + this.name + "<br>");
        document.writeln("<strong>Product Price: </strong>" + this.price + "<br>");
        document.writeln("<strong>Product Quantity: </strong>" + this.quantity + "<br>");
        document.writeln("<hr>");
    };
}

let product1 = new product(101, "Laptop", 50000, 2);
product1.display();
let product2 = new product(102, "Mobile", 20000, 5);
product2.display();