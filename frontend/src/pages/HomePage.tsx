import React from 'react';
import { useProducts } from '../hooks';
import { useCart } from '../contexts';
import { ProductList } from '../components/products';
import { Cart } from '../components/cart';
import { Loading, ErrorMessage } from '../components/common';
import type { Product } from '../types';

/**
 * Página principal - Listado de productos
 */
export const HomePage: React.FC = () => {
    const { products, loading, error } = useProducts();
    const { addItem, getTotalItems } = useCart();

    const handleAddToCart = (product: Product) => {
        addItem({
            product,
            quantity: 1,
        });
    };

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="home-page">
            <section className="home-page__products">
                <div className="home-page__header">
                    <h1>Productos</h1>
                    {getTotalItems() > 0 && (
                        <div className="home-page__cart-badge">
                            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
                        </div>
                    )}
                </div>
                <ProductList products={products} onAddToCart={handleAddToCart} />
            </section>

            <section className="home-page__cart">
                <Cart />
            </section>
        </div>
    );
};
