import { css } from "styled-components";

export const Margin = {
  margin: (...args) => css`
    margin-top: ${props => props.mt ? `${props.mt}px` : "0"};
    margin-right: ${props => props.mr ? `${props.mr}px` : "0"};
    margin-bottom: ${props => props.mb ? `${props.mb}px` : "0"};
    margin-left: ${props => props.ml ? `${props.ml}px` : "0"};
  `,
};
