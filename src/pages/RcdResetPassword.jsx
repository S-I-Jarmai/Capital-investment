import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RecordProfitReset from '../components/AdminMenu/adminComponents/RecordProfitReset'
import RecordProfitUsers from '../components/AdminMenu/adminComponents/RecordProfitReset'
import Menu from '../components/AdminMenu/Menu'
import NavBar from '../components/AdminMenu/NavBar'
import Message from '../components/Message/Message'

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


function RcdResetPassword() {
  const [resetQ, setResetQ] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
        const res = await axios.get('/admin/getreset');
        setResetQ(res.data)
    }
    fetchData()
  },[])
  
  return (
    <Container>
    <Menu/>
  <Main>
    <NavBar/>
    <Wrapper>
      {
        resetQ.map((reset)=>
        <RecordProfitReset key={reset._id} reset={reset}/>          
        )
      }
      
    </Wrapper>
  </Main>
  
</Container>
  )
}

export default RcdResetPassword
