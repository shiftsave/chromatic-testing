import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { ALERT_RED, BLUE_BASE} from '../../theme/constants';

const style = theme.variants('mode', 'buttonType', {
    default: { light: BLUE_BASE, dark: BLUE_BASE },
    primary: { light: 'blue', dark: 'darkblue' },
    success: { light: 'green', dark: 'darkgreen' },
    warning: { light: 'orange', dark: 'darkorange' },
    danger: { light: ALERT_RED, dark: ALERT_RED },
});

export const Button = styled.button`
    color: ${style};
    border: 1px solid ${style};
    border-radius: 2px;
    height: 24px;
    line-height: 22px;
    padding: 0 8px;
`;

Button.propTypes = {
    buttonType: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
};

Button.defaultProps = {
    buttonType: 'default',
};
