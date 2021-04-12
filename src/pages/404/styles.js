import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  > h1 {
    font-size: 44px;
  }

  > button {
    border: solid 1px transparent;
    padding: 5px 10px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
    margin: 20px 0 0 0;

    &:hover {
      border: solid 1px #333;
      color: #333;
      background-color: #fff;
    }
  }
`
