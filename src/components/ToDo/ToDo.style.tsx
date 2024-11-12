import styled from "styled-components"

export const ToDoWrapperStyled = styled.section`
  max-width: 550px;
  min-width: 230px;
  margin-inline: auto;
  line-height: 1.2;

  & > h1 {
    color: #b83f45;
    font-size: clamp(78px, 7vw, 84px);
    font-weight: normal;
    text-align: center;
    margin-block: 1.2rem;
  }

  & > footer {
    color: #4d4d4d;
    text-shadow: 0 1px 0 hsla(0, 0%, 100%, .5);
    font-size: 12px;
    text-align: center;
  }
`

export const ToDoContentWrapperStyled = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2), 0 25px 50px 0 rgba(0, 0, 0, .1);
  margin-bottom: 50px;

  & > *:not(:first-child) {
    border-top: 1px solid #e6e6e6;
  }
`

