import React from "react";
import styled from "styled-components";

/*
 * Style Rules
 */

const StyledButton = styled.button`
  background: blue;
`;

/*
 * Component
 */
export const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
