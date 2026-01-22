import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { CartItem } from '../types';
import { cartStorage } from '../utils';

interface CartContextType {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

/**
 * Provider del carrito con persistencia en localStorage
 */
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    // Cargar carrito desde localStorage al montar
    useEffect(() => {
        const savedCart = cartStorage.load();
        if (savedCart && Array.isArray(savedCart)) {
            setItems(savedCart);
        }
    }, []);

    // Guardar carrito en localStorage cuando cambie
    useEffect(() => {
        cartStorage.save(items);
    }, [items]);

    const addItem = (newItem: CartItem) => {
        setItems((prevItems) => {
            // Verificar si el producto ya existe en el carrito
            const existingItemIndex = prevItems.findIndex(
                (item) => item.product.id === newItem.product.id
            );

            if (existingItemIndex >= 0) {
                // Si existe, incrementar cantidad
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + newItem.quantity,
                };
                return updatedItems;
            } else {
                // Si no existe, agregar nuevo item
                return [...prevItems, newItem];
            }
        });
    };

    const removeItem = (productId: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) {
            removeItem(productId);
            return;
        }

        setItems((prevItems) =>
            prevItems.map((item) =>
                item.product.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
        cartStorage.clear();
    };

    const getTotalItems = () => {
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return items.reduce((total, item) => {
            return total + parseFloat(item.product.price) * item.quantity;
        }, 0);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                getTotalItems,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

/**
 * Hook para usar el contexto del carrito
 */
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
