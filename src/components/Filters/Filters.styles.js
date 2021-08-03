import styled from 'styled-components'
import { Button, Container } from '../../GlobalStyles'

export const FiltersContainer = styled(Container)`
  ${Container};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  background-color: #fff;
  margin-top: -9rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);

  // 1000px
  @media screen and (min-width: 62.5em) {
    padding: 4rem;
    margin-top: -11rem;
  }

  & div:first-child {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  & button {
    position: relative;
  }
`

export const FiltersItem = styled(Button)`
  ${Button};

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(180, 31%, 95%);
  color: hsl(180, 29%, 50%);

  & span {
    padding-right: 3rem;
  }
`

export const FiltersRemoveButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: 3.1rem;
  height: 3.1rem;
  background-color: hsl(180, 29%, 50%);
  transition: background-color 200ms ease-in-out;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`

export const FiltersClearButton = styled(Button)`
  ${Button};

  background-color: transparent;
  padding: 0;
  color: hsl(180, 8%, 52%);
  font-weight: 700;

  &:hover {
    text-decoration: underline;
    color: hsl(180, 29%, 50%);
  }
`
