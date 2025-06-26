class Product {
    constructor(pid, name, price) {
        this.pid = pid;
        this.name = name;
        this.price = price;
    }

    getDetails = () => document.writeln(`Product Id: ${this.pid}, Product Name: ${this.name}, Price: $${this.price}`);
}

let product1 = new Product(101, "Laptop", 50000);
let product2 = new Product(102, "Mobile", 20000);   
product1.getDetails(); // "Product Id: 101, Product Name: Laptop, Price: $50000"
product2.getDetails(); // "Product Id: 102, Product Name: Mobile, Price: $20000"