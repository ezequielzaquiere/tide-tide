import PropTypes from 'prop-types';
import clsx from 'clsx';

const CardInfo = ({ title, value, unit, className = '' }) => {
    return (
        <div
            className={clsx(
                'bg-soft rounded-xl shadow-md p-4 text-dark w-full max-w-sm',
                className
            )}
        >
            <h3 className='text-sm text-blue font-semibold uppercase tracking-wide mb-1'>
                {title}
            </h3>
            <p className='text-2xl font-bold'>
                {value} {unit}
            </p>
        </div>
    );
};

CardInfo.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    unit: PropTypes.string,
    className: PropTypes.string,
};

export default CardInfo;
