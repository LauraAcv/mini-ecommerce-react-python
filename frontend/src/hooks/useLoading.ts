import { useState } from 'react';

/**
 * Hook genérico para manejar loading states
 */
export const useLoading = (initialState = false) => {
    const [loading, setLoading] = useState(initialState);

    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    return { loading, startLoading, stopLoading };
};
