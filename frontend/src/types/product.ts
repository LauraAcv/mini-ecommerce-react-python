/**
 * Tipo para Product desde la API
 */
export interface Product {
    id: number;
    name: string;
    price: string; // Decimal viene como string desde Django
}
