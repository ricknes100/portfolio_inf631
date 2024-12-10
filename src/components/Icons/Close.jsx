import PropTypes from 'prop-types';

export const Close = ({size = 24}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             height={size}
             viewBox="0 -960 960 960"
             width={size}
             fill="#66628F">
            <path
                d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
        </svg>
    )
}

Close.propTypes = {
    size: PropTypes.number
}