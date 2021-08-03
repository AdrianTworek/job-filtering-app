import styled from 'styled-components'
import { Button, Container } from '../../GlobalStyles'

export const JobsContainer = styled(Container)`
  ${Container};
  padding: 5.5rem 2.4rem 3.3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  // 1000px
  @media screen and (min-width: 62.5em) {
    gap: 2.4rem;
  }
`

export const Job = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  border-left: ${({ featured }) =>
    featured ? '5px solid hsl(180, 29%, 50%)' : '5px solid transparent'};
  border-radius: 0.5rem;
  padding: 3.3rem 2.4rem 2.4rem 2.4rem;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    border-left: 5px solid hsl(180, 29%, 50%);
  }

  // 1000px
  @media screen and (min-width: 62.5em) {
    padding: 2.3rem 4rem 2.3rem 14.5rem;
  }

  & .desktop-grid {
    // 1000px
    @media screen and (min-width: 62.5em) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }
  }
`

export const JobImage = styled.div`
  content: '';
  position: absolute;
  left: 2.4rem;
  top: -2.4rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${({ bgImage }) =>
    bgImage && `url(${bgImage}) no-repeat center center / cover`};

  // 1000px
  @media screen and (min-width: 62.5em) {
    width: 9rem;
    height: 9rem;
    top: 3rem;
    left: 3rem;
  }
`

export const JobCompany = styled.h5`
  display: inline-block;
  color: hsl(180, 29%, 50%);
  margin-top: 1rem;
  margin-right: 0.75rem;

  // 1000px
  @media screen and (min-width: 62.5em) {
    font-size: 1.4rem;
  }
`

export const JobButton = styled(Button)`
  ${Button};

  background-color: ${({ bgColor }) => bgColor && `${bgColor}`};
  color: hsl(180, 31%, 95%);
  font-size: 1rem;
  border-radius: 2rem;
  margin: 0 0.5rem;
  height: 2.4rem;
`

export const JobTitle = styled.h3`
  color: hsl(180, 14%, 20%);
  font-size: 1.5rem;
  margin-top: 1.4rem;
  transition: color 200ms ease-in-out;

  // 1000px
  @media screen and (min-width: 62.5em) {
    font-size: 1.7rem;
  }

  &:hover {
    color: hsl(180, 29%, 50%);
  }
`

export const JobDetailsContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-top: 1.6rem;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid hsl(180, 8%, 52%);

  // 1000px
  @media screen and (min-width: 62.5em) {
    border-bottom: none;
    gap: 3.6rem;
  }

  & span:not(:last-child) {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: hsl(180, 8%, 52%);
      right: -1.2rem;
      top: 0.4rem;

      // 1000px
      @media screen and (min-width: 62.5em) {
        right: -1.8rem;
      }
    }
  }
`

export const JobDetails = styled.span`
  font-size: 1.2rem;
  color: hsl(180, 8%, 52%);
`

export const JobTechDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  margin-top: 1.8rem;

  // 1000px
  @media screen and (min-width: 62.5em) {
    margin-top: 0;
  }
`

export const JobTechDetails = styled(Button)`
  ${Button};

  font-size: 1.3rem;
  background-color: hsl(180, 31%, 95%);
  color: hsl(180, 29%, 50%);
  border-radius: 0.5rem;
  transition: all 200ms ease-out;

  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: hsl(180, 31%, 95%);
  }
`
