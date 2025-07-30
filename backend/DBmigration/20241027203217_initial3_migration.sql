-- +goose Up
ALTER TABLE products
ADD COLUMN sale BOOLEAN;


-- +goose Down
ALTER TABLE products
DROP COLUMN IF EXISTS sale;

