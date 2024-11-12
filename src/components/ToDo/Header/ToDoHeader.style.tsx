import styled from "styled-components"

export const ToDoHeaderWrapperStyled = styled.header`
  input {
    box-shadow: inset 0 -2px 1px rgba(0,0,0,.03);
    background-color: transparent;
    border: none;
    height: 100%;
    width: 100%;
    padding: 1rem 1rem 1rem 4rem;
    margin-bottom: 1px;
    font-size: 24px;
    color: inherit;
  }

  ::placeholder {
    color: #999999;
    font-style: italic;
    opacity: 1; /* Firefox */
  }

  ::-ms-input-placeholder { /* Edge 12 -18 */
    color: #999999;
    font-style: italic;
  }

  input:focus {
    box-shadow: 0 0 2px 2px #cf7d7d;
    outline: 0;
  }
`
