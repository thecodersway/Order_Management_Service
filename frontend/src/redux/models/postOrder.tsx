export interface Order {
    id?: number;
    cart_id: number;
    user_id: number;
    payment_method: string|undefined;
    shipping_address: string|undefined;
    billing_address: string|undefined;
    total_price: number;
    created_at?: string;
}

export interface OrderResponse {
    latest_order_id: number
}
