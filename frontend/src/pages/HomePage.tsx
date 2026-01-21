import React from 'react';
import { useProducts } from '../hooks';
import { ProductList } from '../components/products';
import { Loading, ErrorMessage } from '../components/common';
import type { Product } from '../types';

/**
 * Página principal - Listado de productos
 */
export const HomePage: React.FC = () => {
    const { products, loading, error } = useProducts();

    const handleAddToCart = (product: Product) => {
        // TODO: Implementar lógica para agregar al carrito
        console.log('Adding to cart:', product);
    };

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="home-page">
            <h1>Productos</h1>
            <ProductList products={products} onAddToCart={handleAddToCart} />
        </div>
    );
};
