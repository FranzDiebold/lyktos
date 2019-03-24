import PropTypes from 'prop-types';

const GodPropType = PropTypes.shape({
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    emoji: PropTypes.string,
    role: PropTypes.string,
    symbols: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    parents: PropTypes.arrayOf(PropTypes.string),
    counterpart: PropTypes.string,
});

export default GodPropType;
