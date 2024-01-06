import styled, { RuleSet, css } from 'styled-components';
import { ButtonVariants, ButtonProps } from './Button.types';

const variants: Record<ButtonVariants, RuleSet<object>> = {
  solid: css`
    background: #0073e6;
    color: #ffffff;

    &:hover {
      background: #0056b8;
    }

    &:focus {
      background: #0073e6;
      outline: 4px solid;
      outline-color: #0073e6;
      outline-offset: 2px;
    }

    &:active {
      background: #003c8a;
    }

    &:disabled,
    &:hover:disabled,
    &:hover:focus:disabled {
      background: #a6c3d8;
      color: #466678;
    }
  `,
  outline: css`
    background: transparent;
    border-color: #0073e6;
    border-style: solid;
    border-width: 1px;
    color: #0073e6;

    &:hover {
      background: #0073e6;
      color: #ffffff;
    }

    &:focus {
      background: #0073e6;
      color: #ffffff;
      outline: 4px solid;
      outline-color: #0073e6;
      outline-offset: 2px;
    }

    &:active {
      background: #003c8a;
      color: #ffffff;
    }

    &:disabled,
    &:hover:disabled,
    &:hover:focus:disabled {
      background: transparent;
      color: #466678;
      border-color: #466678;
    }
  `,
  ghost: css`
    background: transparent;
    color: #0073e6;

    &:hover {
      background: #e6f2f9;
    }

    &:focus {
      outline: 4px solid;
      outline-color: #0073e6;
      outline-offset: 2px;
    }

    &:active {
      background: #c8deec;
    }

    &:disabled,
    &:hover:disabled,
    &:hover:focus:disabled {
      color: #466678;
    }
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  border-color: transparent;
  border-width: 1px;
  margin: 0.5rem;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: 700;
  line-height: 1.2;
  box-sizing: border-box;
  min-width: 12rem;
  padding: 1rem 2rem;
  ${(props) => props.variant && variants[props.variant]}
`;
