import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        font-size: 1.5rem;
        font-family: 'Spartan', 'Helvetica', sans-serif;
        font-weight: 500;
        min-height: 100vh;
        background-color:hsl(180, 52%, 96%);
        min-width: 32rem;
    }
`

export const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`

export const Button = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  padding: 1rem;
  line-height: 0.9;
  color: hsl(180, 31%, 95%);
  font-family: inherit;
  font-weight: 700;
  border-radius: 0.5rem;
  transition: all 200ms ease-out;
`

export default GlobalStyles
