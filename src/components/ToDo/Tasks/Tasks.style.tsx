import styled from "styled-components"

export const TasksWrapperStyled = styled.ul`
  position: relative;
  font-size: 24px;

  li:not(:first-child) {
    border-top: 1px solid #e6e6e6;
  }
`

export const ToggleAllStyled = styled.div<{ $allSelected: Boolean }>`
  label, input {
    position: absolute;
    width: calc(3rem - 6px);
    height: calc(4rem - 4px);
    bottom: calc(100% + 2px);
    overflow: hidden;
    cursor: pointer;
  }

  input {
    opacity: 0;
  }

  label {
    font-size: 0;
    pointer-events: none;
  }

  label::before {
    color: ${({ $allSelected }) => $allSelected ? '#484848' : '#949494'};
    content: "❯";
    display: inline-block;
    font-size: 22px;
    padding: 18px 14px;
    transform: rotate(90deg);
  }

  input:focus + label {
    box-shadow: 0 0 2px 2px #cf7d7d;
    outline: 0;
  }
`
