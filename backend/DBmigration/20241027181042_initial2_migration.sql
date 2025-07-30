-- +goose Up
ALTER TABLE addresses
ADD COLUMN label VARCHAR(100),
ADD COLUMN address_line1 TEXT;

ALTER TABLE products
ADD COLUMN grade TEXT[],
ADD COLUMN weight INTEGER[];

-- +goose Down
ALTER TABLE addresses
DROP COLUMN IF EXISTS label,
DROP COLUMN IF EXISTS address_line1;

ALTER TABLE products
DROP COLUMN IF EXISTS grade,
DROP COLUMN IF EXISTS weight;