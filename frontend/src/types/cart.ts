import type { Product } from './product';

/**
 * Item del carrito en frontend (persistencia local)
 */
export interface CartItem {
    product: Product;
    quantity: number;
}

/**
 * Payload para enviar al backend POST /cart/
 */
export interface CartItemPayload {
    product_id: number;
    quantity: number;
}

export interface CartCreateRequest {
    items: CartItemPayload[];
}

/**
 * Respuesta del backend al crear carrito
 */
export interface CartResponse {
    id: number;
    items: {
        id: number;
        product: Product;
        quantity: number;
        subtotal: string;
    }[];
    total: string;
    created_at: string;
    updated_at: string;
}
