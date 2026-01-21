import apiClient from './api';
import type { CartCreateRequest, CartResponse } from '../types';

/**
 * Servicio para operaciones relacionadas con el carrito
 */
export const cartService = {
    /**
     * Crear carrito en el backend
     */
    async create(cartData: CartCreateRequest): Promise<CartResponse> {
        const response = await apiClient.post<CartResponse>('/cart/', cartData);
        return response.data;
    },
};
