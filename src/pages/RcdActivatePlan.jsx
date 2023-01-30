import axios from 'axios'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RecordActivatePlan from '../components/AdminMenu/adminComponents/RecordActivatePlan'
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

function RcdActivatePlan() {

    const [getAllActivated, setGetAllActivated] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
          let list = [];
          try {
            const querySnapshots = await getDocs(collection(db, "reqtobuyplans"));
        querySnapshots.forEach((doc) =>{
          list.push({id: doc.id, ...doc.data()});
        });
        setGetAllActivated(list)
          } catch (error) {
            alert(error)
          }
            // const res = await axios.get('/admin/get_acti_plans');
            // SetgetAllActivated(res.data)
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
                getAllActivated.map((getAllRecord)=>
                <RecordActivatePlan key={getAllRecord._id} getAllRecord={getAllRecord}/>
                )
            }
            

        </Wrapper>
      </Main>
    </Container>
  )
}

export default RcdActivatePlan
