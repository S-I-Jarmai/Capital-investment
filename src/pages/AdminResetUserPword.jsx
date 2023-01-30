import React from 'react'
import styled from 'styled-components'
import AddBankDetails from '../components/AdminMenu/adminComponents/AddBankDetails'
import AdminForgotPassword from '../components/AdminMenu/adminComponents/AdminForgotPassword'
import Menu from '../components/AdminMenu/Menu'
import NavBar from '../components/AdminMenu/NavBar'

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

function AdminResetUserPword() {
  return (
    <Container>
    <Menu/>
  <Main>
    <NavBar/>
    <Wrapper>
    <AdminForgotPassword/>
    </Wrapper>
  </Main>
</Container>
  )
}

export default AdminResetUserPword
