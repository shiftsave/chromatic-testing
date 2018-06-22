import { css } from "styled-components";

export const Padding = {
  padding: (...args) => css`
    padding-top: ${props => props.pt ? `${props.pt}px` : "0"};
    padding-right: ${props => props.pr ? `${props.pr}px` : "0"};
    padding-bottom: ${props => props.pb ? `${props.pb}px` : "0"};
    padding-left: ${props => props.pl ? `${props.pl}px` : "0"};
  `
};
