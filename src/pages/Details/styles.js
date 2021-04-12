import styled from 'styled-components'

// icons
import { IoIosReturnLeft } from 'react-icons/all'

export const Container = styled.main`
  height: 100%;

  > section {
    padding: 80px 3% 20px;
    height: 100%;

    > .return {
      cursor: pointer;
      display: flex;
      align-items: center;

      margin: 0 0 10px 0;

      > p {
        margin-left: 10px;
        font-size: 12px;
      }
    }
  }
`

export const Card = styled.div`
  background-color: #FFF;
  box-shadow: rgb(32 33 36 / 28%) 0px 1px 6px 0px;
  margin: 20px 0 0 0;
  width: 100%;
  border-radius: 7px;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  > .content {
    padding: 20px 10px;

    > h2 {
      color: #1ee3cf;
      font-size: 12px;
      margin: 10px 0 0 0;
      text-transform: uppercase;
    }

    > h3 {
      font-size: 16px;
      text-transform: uppercase;
      margin: 5px 0;
    }

    > p {
      color: #555;
      font-size: 14px;
      text-transform: uppercase;
    }
  }

  > img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 7px 7px 0 0;

    @media only screen and (min-width: 768px) {
      max-width: 50%;
    }
  }
`

export const IconReturn = styled(IoIosReturnLeft)`
  color: #333;
  font-size: 18px;
`
