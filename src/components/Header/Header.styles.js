import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 15.5rem;
  background: url('./images/bg-header-mobile.svg') no-repeat center center /
      cover,
    hsl(180, 29%, 50%);

  @media screen and (min-width: 48em) {
    background: url('./images/bg-header-desktop.svg') no-repeat center center /
        cover,
      hsl(180, 29%, 50%);
  }
`
