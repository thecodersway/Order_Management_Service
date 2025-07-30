// src/models/shippingAddressModel.ts
export interface Address {
    id: number;
    address_type: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
    created_at: string;
    updated_at: string;
    label: string;
    address_line1: string;
  // eslint-disable-next-line eol-last
  }