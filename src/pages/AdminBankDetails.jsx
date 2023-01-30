import React from 'react'
import styled from 'styled-components'
import AddBankDetails from '../components/AdminMenu/adminComponents/AddBankDetails'
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

function AdminBankDetails() {
  return (
    <Container>
    <Menu/>
  <Main>
    <NavBar/>
    <Wrapper>
    <AddBankDetails/>
    </Wrapper>
  </Main>
</Container>
  )
}

export default AdminBankDetails
