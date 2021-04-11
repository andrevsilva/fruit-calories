import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;

  > section {
    padding: 80px 3% 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;

    @media only screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`
