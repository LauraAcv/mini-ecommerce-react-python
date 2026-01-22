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
    const subtotal = (parseFloat(item.product.price) * item.quantity).toFixed(2);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            onUpdateQuantity(item.product.id, newQuantity);
        }
    };

    return (
        <div className="cart-item">
            <div className="cart-item__info">
                <h4 className="cart-item__name">{item.product.name}</h4>
                <p className="cart-item__price">${item.product.price}</p>
            </div>

            <div className="cart-item__quantity-wrapper">
                {/* <label className="cart-item__label">Cantidad</label> */}
                <div className="cart-item__quantity">
                    <button
                        className="quantity-btn quantity-btn--minus"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Disminuir cantidad"
                    >
                        <span className="quantity-btn__icon">−</span>
                    </button>
                    <input
                        className="quantity-input"
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={handleQuantityChange}
                        aria-label="Cantidad"
                    />
                    <button
                        className="quantity-btn quantity-btn--plus"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        aria-label="Aumentar cantidad"
                    >
                        <span className="quantity-btn__icon">+</span>
                    </button>
                </div>
            </div>

            <div className="cart-item__subtotal">
                <label className="cart-item__label">Subtotal</label>
                <p className="cart-item__subtotal-value">${subtotal}</p>
            </div>

            <button
                className="cart-item__remove"
                onClick={() => onRemove(item.product.id)}
                aria-label="Eliminar producto"
            >
                <span className="remove-icon">✕</span>
                <span className="remove-text">Eliminar</span>
            </button>
        </div>
    );
};
