import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

/**
 * Instancia configurada de Axios
 */
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Aquí se pueden agregar interceptors para manejo de errores, tokens, etc.

export default apiClient;
