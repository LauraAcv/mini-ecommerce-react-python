import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    children: React.ReactNode;
}

/**
 * Componente reutilizable de botón
 */
export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    // TODO: Implementar estilos según variant
    return (
        <button className={`button button--${variant} ${className}`} {...props}>
            {children}
        </button>
    );
};
