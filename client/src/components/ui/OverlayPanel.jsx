import PropTypes from 'prop-types';
import CardInfo from './CardInfo';

const OverlayPanel = ({ data }) => {
    return (
        <aside className='absolute top-4 right-4 z-50 bg-white/80 backdrop-blur-md border border-soft rounded-xl p-4 shadow-lg w-72 space-y-4'>
            {data.map(({ title, value, unit }, i) => (
                <CardInfo
                    key={i}
                    title={title}
                    value={value}
                    unit={unit}
                    className='bg-white'
                />
            ))}
        </aside>
    );
};

OverlayPanel.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            unit: PropTypes.string,
        })
    ).isRequired,
};

export default OverlayPanel;
