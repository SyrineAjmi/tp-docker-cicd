CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price NUMERIC NOT NULL,
  category VARCHAR(100),
  quantity INT DEFAULT 0
);

INSERT INTO products (name, price, category, quantity) VALUES
('Product A', 10, 'Category 1', 5),
('Product B', 20, 'Category 2', 3);

