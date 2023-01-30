import axios from 'axios'
import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import ActivatePlan from '../components/AdminMenu/adminComponents/ActivatePlan'
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

function AdminActivatePlan() {
  const [rqPlans, setRqPlan] = useState([]);

  useEffect(()=>{
    const fetchRqPlans = async ()=>{
      let list = [];
      try {
        const querySnapshots = await getDocs(collection(db, "reqtobuyplans"));
        querySnapshots.forEach((doc) =>{
          list.push({id: doc.id, ...doc.data()});
        });
        setRqPlan(list)
      } catch (error) {
        
      }  
      //const res = await axios.get('/admin/plan_request');
        
    }
    fetchRqPlans()
  },[])
  console.log(rqPlans);
  return (
    <Container>
        <Menu/>
      <Main>
        <NavBar/>
        <Wrapper>
        { !rqPlans ? (<h1>Data is Loading</h1>) : (rqPlans.map((rqPlan)=>
              <ActivatePlan key={rqPlan.id} planName={rqPlan.planName} planAmount={rqPlan.planAmount} 
              paymentImg={rqPlan.paymentImg} userImg={rqPlan.userImg} userPhnumber={rqPlan.userPhnumber}
              userEmail={rqPlan.userEmail} userName={rqPlan.userName} userId={rqPlan.userId}
              createdAt={rqPlan.timeStamp} deleteId={rqPlan.id} userdailyprofit={rqPlan.userdailyprofit}
              />
            ) 
            ) 
          }
        
        </Wrapper>
      </Main>
    </Container>
  )
}

export default AdminActivatePlan
