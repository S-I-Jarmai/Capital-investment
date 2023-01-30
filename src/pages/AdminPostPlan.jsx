import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/AdminMenu/NavBar'
import Menu from '../components/AdminMenu/Menu'
import PostPlan from '../components/AdminMenu/adminComponents/PostPlan'

const Container = styled.div`
display: flex;
`
const Main = styled.div`
flex: 7;
background-color: ${({theme}) => theme.bg};
`
const Wrapper = styled.div`
  padding: 20px 30px;
`

function AdminPostPlan() {
  return (
    <Container>
    <Menu/>
  <Main>
    <NavBar/>
    <Wrapper>
    <PostPlan/>
    </Wrapper>
  </Main>
</Container>
  )
}

export default AdminPostPlan
