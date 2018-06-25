import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import * as color from '../../constants/colors';

const style = theme.variants('mode', 'buttonType', {
    default: { light: color.BLUE_BASE, dark: color.BLUE_BASE },
    primary: { light: color.BLUE_BASE, dark: color.BLUE_BASE },
    success: { light: color.ALERT_GREEN, dark: color.ALERT_GREEN },
    warning: { light: color.ALERT_YELLOW, dark: color.ALERT_YELLOW },
    danger: { light: color.ALERT_RED, dark: color.ALERT_RED },
});

export const Button = styled.button`
    background: ${props => props.buttonType === 'primary' && color.BLUE_BASE};
    border: 1px solid ${style};
    border-radius: 2px;
    color: ${style};
    color: ${props => props.buttonType === 'primary' && 'white'};
    height: 24px;
    line-height: 22px;
    padding: 0 8px;
`;

Button.propTypes = {
    buttonType: PropTypes.oneOf([
        'default',
        'primary',
        'success',
        'warning',
        'danger',
    ]),
};

Button.defaultProps = {
    buttonType: 'default',
};
