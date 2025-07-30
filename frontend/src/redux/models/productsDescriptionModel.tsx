// models/ProductSpecifications.ts

export interface ProductsDescriptions {
    image_url: string | undefined;
    id: number;
    product_id: number;
    sku_id: string;
    grade: string;
    net_weight: number;
    stocks: number;
    discount: number;
    min_order_quantity: number;
    max_order_quantity: number;
    dimensions: string;
    price: number;
    description: string;
    country_of_origin: string;
    brand: string;
    product_name: string;
    sale: boolean;
    created_at: string;
    updated_at: string;
  }
