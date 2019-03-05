DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("hair dryer", "cosmetics", 15.50, 50);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("tooth brush", "hygiene", 5.50, 150);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("chair", "furniture", 25.50, 75);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("lamp", "electric", 25.00, 30);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("TV", "electric", 475.00, 10);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("couch", "furniture", 225.00, 25);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("shampoo", "hygiene", 9.50, 50);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("make up", "cosmetics", 40.50, 60);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("soccer ball", "sports", 55.50, 50);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("basketball hoop", "sports", 115.50, 20);
