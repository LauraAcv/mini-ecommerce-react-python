import React from 'react';
import type { CartItem as CartItemType } from '../../types';

interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (productId: number, quantity: number) => void;
    onRemove: (productId: number) => void;
}

/**
 * Item individual del carrito
 */
export const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
    return (
        <div className="cart-item">
            <h4>{item.product.name}</h4>
            <p>${item.product.price}</p>
            <div className="cart-item__quantity">
                <button onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => onRemove(item.product.id)}>Eliminar</button>
        </div>
    );
};
