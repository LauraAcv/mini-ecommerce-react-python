import React from 'react';
import type { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductListProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

/**
 * Lista de productos
 */
export const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
    if (products.length === 0) {
        return <p>No hay productos disponibles.</p>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};
