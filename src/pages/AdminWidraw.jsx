import { async } from '@firebase/util'
import axios from 'axios'
import { collection, doc, getDocs } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ProcessWidraw from '../components/AdminMenu/adminComponents/ProcessWidraw'
import Menu from '../components/AdminMenu/Menu'
import NavBar from '../components/AdminMenu/NavBar'
import { db } from '../firebase'

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

function AdminWidraw() {
    const [widrawData, setWidraw] = useState([]);
    const [userInfo, setUserInfo] = useState({})
    useEffect(()=>{
        const fetchData = async ()=>{
             let list = [];
             try {
              const querySnapshots = await getDocs(collection(db, "reqWidraw"));
            querySnapshots.forEach((doc) =>{
            list.push({id: doc.id, ...doc.data()});
            });
              setWidraw(list)
             } catch (error) {
              alert(error)
             }
            // const resWidraw = await axios.get('/admin/widraw_request');
            // setWidraw(resWidraw.data)
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
            
            widrawData.length === 0 ? (<h1>There is no widrawal request at the moment</h1>):(
              widrawData.map((widraw)=>
              <ProcessWidraw key={widraw.id} widraw={widraw}
              />
              )
            )
           
            
          }
        
        
        </Wrapper>
      </Main>
    </Container>
  )
}

export default AdminWidraw
