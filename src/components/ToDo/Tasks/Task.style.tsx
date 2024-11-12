import styled from "styled-components"

export const TaskWrapperStyled = styled.li`
  position: relative;
  display: flex;
  list-style: none;

  &:hover button {
    display: block;
  }

  &:focus-within {
    box-shadow: 0 0 2px 2px #cf7d7d;
    outline: 0;
  }
`