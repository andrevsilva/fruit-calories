import styled from 'styled-components'

import { BiMenu, IoCloseSharp } from 'react-icons/all'

export const Container = styled.header`
  background-color: #f5f5f5;
  position: fixed;
  min-height: 65px;
  width: 100%;
  padding: 0 3%;
  transition: all 0.2s ease 0s;
  box-shadow: rgb(32 33 36 / 28%) 0px 1px 6px 0px;

  display: flex;
  align-items: center;

  > h1 {
    font-size: 18px;
    margin: 0 0 0 20px;

    @media only screen and (min-width: 768px) {
      display: none;
    }
  }

  > nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    transition: all 0.2s ease 0.2s;
    background-color: #333;

    .closeMenu {
      position: absolute;
      top: 30px;
      right: 30px;
    }

    a {
      color: #fff;
      font-size: 22px;
    }

    .active {
      color: #f49;
    }

    @media only screen and (min-width: 768px) {
      position: initial;
      height: auto;
      width: auto;
      background: transparent;
      justify-content: flex-start;

      ul {
        display: flex;

        li {
          margin: 0 15px 0 0;

          a {
            color: #333;
            font-size: 16px;
          }
        }
      }
    }
  }

  .openMenu {
    left: 0;
  }
`

export const IconMenu = styled(BiMenu)`
  color: rgb(52, 49, 45);
  font-size: 30px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export const IconCloseMenu = styled(IoCloseSharp)`
  color: #fff;
  font-size: 30px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`
