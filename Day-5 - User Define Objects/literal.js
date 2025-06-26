let product = { pid: 101, name: "Laptop", price: 50000, quantity: 2 };
document.writeln("Product ID: " + product.pid + "<br>");
document.writeln("Product Name: " + product.name + "<br>");
document.writeln("Product Price: " + product.price + "<br>");
document.writeln("Product Quantity: " + product.quantity + "<br>");
document.writeln("<hr>");

let emp = {
    eid: 1001, name: "Yashswai", salary: 50000, designation: "Software Engineer", display: () => {
        document.writeln("<h3>Employee Details:</h3><p><b>Employee Id: </b>" + 
            this.eid + ",<br /> <b>Name: </b>" + 
            this.name + ",<br /> <b>Salary: </b>" + 
            this.salary + ",<br /> <b>Designation: </b>" + 
            this.designation + "<br>");
    }
};

emp.display();


