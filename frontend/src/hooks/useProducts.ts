import { useState, useEffect, useCallback } from 'react';
import type { Product } from '../types';
import { productService } from '../services';

/**
 * Hook personalizado para manejar la carga de productos
 */
export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await productService.getAll();
            setProducts(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al cargar productos');
            console.error('Error fetching products:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return { products, loading, error, reload: fetchProducts };
};
