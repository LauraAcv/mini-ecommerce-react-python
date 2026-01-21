/**
 * Utilidades para trabajar con localStorage
 */

const CART_STORAGE_KEY = 'mini-ecommerce-cart';

export const storage = {
    /**
     * Guardar datos en localStorage
     */
    set: <T>(key: string, value: T): void => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    },

    /**
     * Obtener datos de localStorage
     */
    get: <T>(key: string): T | null => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    },

    /**
     * Remover datos de localStorage
     */
    remove: (key: string): void => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing from localStorage:', error);
        }
    },

    /**
     * Limpiar todo el localStorage
     */
    clear: (): void => {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error clearing localStorage:', error);
        }
    },
};

// Funciones específicas para el carrito
export const cartStorage = {
    save: (cart: any) => storage.set(CART_STORAGE_KEY, cart),
    load: () => storage.get(CART_STORAGE_KEY),
    clear: () => storage.remove(CART_STORAGE_KEY),
};
