DROP DATABASE IF EXISTS amazonreviews;
DROP TABLE IF EXISTS products, users, reviews;

CREATE DATABASE amazonreviews;

\c amazonreviews;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(50) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL,
  country VARCHAR(75) NOT NULL,
  avatar VARCHAR(2083)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  user_id INT NOT NULL,
  overall_rating SMALLINT NOT NULL,
  review_date DATE NOT NULL,
  headline VARCHAR(100) NOT NULL,
  full_text VARCHAR(1024) NOT NULL,
  helpful SMALLINT NOT NULL,
  verified_purchase SMALLINT,
  product_photo VARCHAR(512),
  CREATE INDEX product_lookup ON reviews(product_id);
);


GRANT ALL PRIVILEGES ON DATABASE amazonreviews TO quentinmcmillian;
GRANT ALL ON ALL TABLES IN SCHEMA public TO quentinmcmillian;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO quentinmcmillian;

-- -- Import Shell Users Command
COPY users (user_name,country,avatar) FROM '/Users/quentinmcmillian/Desktop/SDC/Quentin-Service/server/db/postgres/CSV/files/users.csv' DELIMITER '|' CSV HEADER;
-- -- Import Products Shell
COPY products (product_name) FROM '/Users/quentinmcmillian/Desktop/SDC/Quentin-Service/server/db/postgres/CSV/files/products.csv' DELIMITER ',' CSV HEADER;

-- Import Shell Reviews Command
COPY reviews (product_id,user_id,overall_rating,review_date,headline,full_text,helpful,verified_purchase,product_photo) FROM '/Users/quentinmcmillian/Desktop/SDC/Quentin-Service/server/db/postgres/CSV/files/reviews.csv' DELIMITER '|' CSV HEADER;

-- psql -h localhost -d postgres -f /Users/quentinmcmillian/Desktop/SDC/Quentin-Service/server/db/postgres/pgschema.sql;

