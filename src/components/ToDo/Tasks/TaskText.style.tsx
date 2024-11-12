import styled from "styled-components"

export const TaskTextInputStyled = styled.input`
  width: 2rem;
  height: 2rem;
  margin-top: 1rem;
  margin-left: .5rem;

  &:hover {
    outline: none;
  }
`

export const TaskTextLabelStyled = styled.label<{ $completed: Boolean }>`
  color: ${({ $completed }) => $completed && '#949494'};
  text-decoration: ${({ $completed }) => $completed && 'line-through'};
  padding: 1rem 1rem 1rem 1.5rem;
  width: 100%;
`

export const TaskTextButtonStyled = styled.button`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  height: 40px;
  width: 40px;
  font-size: 30px;
  color: #949494;
  margin: auto 0;
  background: transparent;
  border: unset;
  cursor: pointer;

  &::before {
    content: "×";
    display: block;
    height: 100%;
    line-height: 1.1;
  }

  &:hover {
    color: #c18585;
  }
`