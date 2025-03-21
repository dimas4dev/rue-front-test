export interface Product {
    id: number;
    product_name: string;
    description: string;
    price: number;
    rating: number;
}

export interface InventoryItem {
    product_id: number;
    quantity: number;
    rating: number;
}

export interface ApiResponse<T> {
    inventory?: T[];
    products?: T[];
}
