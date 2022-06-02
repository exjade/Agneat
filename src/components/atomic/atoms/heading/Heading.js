import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Heading.css'

const Heading = ({ text, color, family, size }) => {
    return (
        <h1
            className={classNames('heading', {
                [`color--${color}`]: color,
                [`family--${family}`]: family,
                [`size--${size}`]: size,
            })}
        >
            {text}
        </h1>
    )
}

export default Heading;

Heading.propTypes = {
    /* Text to display */
    text: PropTypes.string,
    /* Color  */
    color: PropTypes.oneOf(['white', 'black', 'gray']),
    /* Family  */
    family: PropTypes.oneOf(['Oswald']),
    /* Size */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
}

