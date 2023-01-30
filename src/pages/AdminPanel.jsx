import React from 'react'
import styled from 'styled-components'
import ActivatePlan from '../components/AdminMenu/adminComponents/ActivatePlan'
import AddBankDetails from '../components/AdminMenu/adminComponents/AddBankDetails'
import PlanPreview from '../components/AdminMenu/adminComponents/PlanPreview'
import PostPlan from '../components/AdminMenu/adminComponents/PostPlan'
import ProcessWidraw from '../components/AdminMenu/adminComponents/ProcessWidraw'
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

function AdminPanel() {
  return (
    <Container>
        <Menu/>
      <Main>
        <NavBar/>
        <Wrapper>
            <PlanPreview/>
        </Wrapper>
      </Main>
    </Container>
  )
}

export default AdminPanel
