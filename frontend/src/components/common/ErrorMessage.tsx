import React from 'react';

interface ErrorMessageProps {
    message: string;
}

/**
 * Componente para mostrar errores
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="error-message">
            <p>{message}</p>
        </div>
    );
};
