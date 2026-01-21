import React from 'react';

interface LoadingProps {
    message?: string;
}

/**
 * Componente de indicador de carga
 */
export const Loading: React.FC<LoadingProps> = ({ message = 'Cargando...' }) => {
    return (
        <div className="loading">
            <div className="loading__spinner"></div>
            <p>{message}</p>
        </div>
    );
};
