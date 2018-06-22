import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children, buttonType }) => (
    <button className={className} buttonType={buttonType || "default"}>{children}</button>
);

Button.propTypes = {
    /** Button type */
    buttonType: PropTypes.oneOf([
        'default',
        'primary',
        'success',
        'warning',
        'danger',
    ]),
    /** Optional classes for eventual customization */
    className: PropTypes.string,
};

export default Button;
