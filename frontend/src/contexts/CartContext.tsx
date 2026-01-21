import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { CartItem } from '../types';

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
        // TODO: Implementar carga desde localStorage
    }, []);

    // Guardar carrito en localStorage cuando cambie
    useEffect(() => {
        // TODO: Implementar guardado en localStorage
    }, [items]);

    const addItem = (_item: CartItem) => {
        // TODO: Implementar lógica para agregar item
    };

    const removeItem = (_productId: number) => {
        // TODO: Implementar lógica para remover item
    };

    const updateQuantity = (_productId: number, _quantity: number) => {
        // TODO: Implementar lógica para actualizar cantidad
    };

    const clearCart = () => {
        // TODO: Implementar lógica para limpiar carrito
    };

    const getTotalItems = () => {
        // TODO: Implementar cálculo de total de items
        return 0;
    };

    const getTotalPrice = () => {
        // TODO: Implementar cálculo de precio total
        return 0;
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
