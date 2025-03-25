import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles =
        'px-4 py-2 rounded font-semibold transition-colors duration-200';

    const variantStyles = {
        primary: 'bg-blue text-white hover:bg-light',
        secondary: 'bg-soft text-dark hover:bg-white',
        alert: 'bg-alert text-white hover:bg-red-600',
    };

    return (
        <button
            className={clsx(baseStyles, variantStyles[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'alert']),
    className: PropTypes.string,
};

export default Button;
