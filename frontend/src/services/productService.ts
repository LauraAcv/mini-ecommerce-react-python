import apiClient from './api';
import type { Product } from '../types';

/**
 * Servicio para operaciones relacionadas con productos
 */
export const productService = {
    /**
     * Obtener lista de productos
     */
    async getAll(): Promise<Product[]> {
        const response = await apiClient.get<Product[]>('/products/');
        return response.data;
    },

    /**
     * Obtener un producto por ID (para futuro uso)
     */
    async getById(id: number): Promise<Product> {
        const response = await apiClient.get<Product>(`/products/${id}/`);
        return response.data;
    },
};
