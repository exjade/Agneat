import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Paragraph.css'

const Paragraph = ({ text, color, family, size }) => {
    return (
        <p
            className={classNames('paragraph', {
                [`color--${color}`]: color,
                [`family--${family}`]: family,
                [`size--${size}`]: size,
            })}
        >
            {text}
        </p>
    )
}

export default Paragraph;

Paragraph.propTypes = {
    /* Text to display */
    text: PropTypes.string,
    /* Color  */
    color: PropTypes.oneOf(['white', 'black', 'gray']),
    /* Family  */
    family: PropTypes.oneOf(['Oswald']),
    /* Size */
    size: PropTypes.oneOf(['xs', 'sm', 'md']),
}

