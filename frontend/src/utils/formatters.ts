/**
 * Utilidades para formatear precios
 */

/**
 * Formatear precio a formato de moneda
 */
export const formatPrice = (price: string | number): string => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD',
    }).format(numPrice);
};

/**
 * Calcular total de items
 */
export const calculateTotal = (items: Array<{ quantity: number; product: { price: string } }>): number => {
    return items.reduce((total, item) => {
        return total + item.quantity * parseFloat(item.product.price);
    }, 0);
};
