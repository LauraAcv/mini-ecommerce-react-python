import React from 'react';
import type { Product } from '../../types';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

/**
 * Tarjeta de producto individual
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p className="product-card__price">${product.price}</p>
            <button onClick={() => onAddToCart(product)}>
                Agregar al carrito
            </button>
        </div>
    );
};
