import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
`;

export const Announcement = () => {
  return (
    <Container> Hey! There , Grab everything under Rs.999 </Container>
  )
}
