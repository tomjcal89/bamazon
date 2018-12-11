DATA DATABASE IF EXISTS bamazonDB;

CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("christmas tree", "holidays", 199.99, 52);
("mountain bike", "sports", 599.99, 19);
("tooth brush", 'self care' 2.99, 85);
("champagne", "food and drink", 12.99, 13);
("la croix", "food and drink", 6.99, 29);
("rubber duck", "toys", 1.99, 150);
("alarm clock", "bedroom", 12.99, 65);
("frozen pizza", "food and drink", 8.99, 14);
("football", "sports", 9.99, 103);
("christmas lights", "holidays", 15.99, 30);
INSERT INTO products VALUES