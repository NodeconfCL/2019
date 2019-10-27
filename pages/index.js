import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark};
`

const Title = styled.h1`
  font-size: 6rem;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.light};
`

const Symbol = styled.span`
  font-size: 9rem;
  line-height: 1em;
  color: ${({ theme }) => theme.colors.green};
  text-shadow: 0px 0px transparent;
  transition: all 250ms;
  &:hover {
    text-shadow: 0px 0px 1px ${({ theme }) => theme.colors.light};
  }
`

export default () => (
  <TitleContainer>
    <Symbol>⬢</Symbol>
    <Title>.CL</Title>
    <Title>2020</Title>
  </TitleContainer>
)
