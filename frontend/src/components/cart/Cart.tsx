import React, { useState } from 'react';
import { useCart } from '../../contexts';
import { CartItem } from './CartItem';
import { cartService } from '../../services';
import type { CartCreateRequest } from '../../types';

/**
 * Componente del carrito de compras
 */
export const Cart: React.FC = () => {
    const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSaveCart = async () => {
        if (items.length === 0) {
            setError('El carrito está vacío');
            return;
        }

        try {
            setLoading(true);
            setError(null);
            setSuccessMessage(null);

            // Construir payload para el backend
            const payload: CartCreateRequest = {
                items: items.map((item) => ({
                    product_id: item.product.id,
                    quantity: item.quantity,
                })),
            };

            // Guardar en backend
            const response = await cartService.create(payload);

            // Mostrar mensaje de éxito
            setSuccessMessage(`¡Carrito guardado exitosamente! ID: ${response.id}`);

            // Limpiar carrito después de 3 segundos
            setTimeout(() => {
                clearCart();
                setSuccessMessage(null);
            }, 3000);

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al guardar el carrito');
            console.error('Error saving cart:', err);
        } finally {
            setLoading(false);
        }
    };

    if (items.length === 0) {
        return (
            <div className="cart cart--empty">
                <p>El carrito está vacío</p>
            </div>
        );
    }

    return (
        <div className="cart">
            <div className="cart__header">
                <h2 className="cart__title">Carrito de Compras</h2>
                <span className="cart__count">{items.length} {items.length === 1 ? 'producto' : 'productos'}</span>
            </div>

            {error && (
                <div className="cart__message cart__message--error">
                    <span className="message-icon">⚠</span>
                    <span>{error}</span>
                </div>
            )}

            {successMessage && (
                <div className="cart__message cart__message--success">
                    <span className="message-icon">✓</span>
                    <span>{successMessage}</span>
                </div>
            )}

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
                <button
                    className="button button--secondary"
                    onClick={clearCart}
                    disabled={loading}
                >
                    Vaciar carrito
                </button>
                <button
                    className="button button--primary"
                    onClick={handleSaveCart}
                    disabled={loading}
                >
                    {loading ? 'Guardando...' : 'Guardar carrito'}
                </button>
            </div>
        </div>
    );
};
