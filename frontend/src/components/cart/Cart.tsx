import React from 'react';
import { useCart } from '../../contexts';
import { CartItem } from './CartItem';

/**
 * Componente del carrito de compras
 */
export const Cart: React.FC = () => {
    const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();

    if (items.length === 0) {
        return <div className="cart cart--empty">El carrito está vacío</div>;
    }

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            <div className="cart__items">
                {items.map((item) => (
                    <CartItem
                        key={item.product.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeItem}
                    />
                ))}
            </div>
            <div className="cart__total">
                <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
            </div>
            <div className="cart__actions">
                <button onClick={clearCart}>Vaciar carrito</button>
                <button>Finalizar compra</button>
            </div>
        </div>
    );
};
