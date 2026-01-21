import React from 'react';
import { Cart } from '../components/cart';

/**
 * Página del carrito de compras
 */
export const CartPage: React.FC = () => {
    return (
        <div className="cart-page">
            <h1>Mi Carrito</h1>
            <Cart />
        </div>
    );
};
