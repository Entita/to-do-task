import styled from "styled-components"

export const ToDoFooterWrapperStyled = styled.footer`
  position: relative;
  padding: .5rem 1rem;
  text-align: center;
  font-size: 15px;
  height: 36px;
  z-index: 0;

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    left: 0;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, .2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, .2);
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }

  span {
    float: left;
  }

  button {
    position: relative;
    float: right;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    font-size: 15px;
    z-index: 0;
  }

  button:hover {
    text-decoration: underline;
  }

  @media (max-width: 430px) {
    height: 66px;
  }
`

export const ToDoStatesWrapperStyled = styled.ul`
  position: absolute;
  list-style: none;
  left: 0;
  right: 0;

  @media (max-width: 430px) {
    bottom: 10px;
  }
`

export const ToDoStateWrapperStyled = styled.li<{ $selected: Boolean }>`
  display: inline;
  border: 1px solid transparent;
  border-radius: 3px;
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  border-color: ${({ $selected }) => $selected && '#ce4646'};
  cursor: pointer;

  &:hover {
    border-color: ${({ $selected }) => !$selected && '#db7676'};
  }
`
