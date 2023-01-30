import axios from 'axios'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RecordProcessedWidraw from '../components/AdminMenu/adminComponents/RecordProcessedWidraw'
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
function RcdProcessedWidraw() {
  const [rcdProWidraw, setRcdProWidraw] = useState([])
  useEffect(()=>{
    const fetchData = async () =>{
      let list = [];
      try {
        const querySnapshots = await getDocs(collection(db, "rcdproccedwidraw"));
        querySnapshots.forEach((doc) =>{
          list.push({id: doc.id, ...doc.data()});
        });
        setRcdProWidraw(list);
      }
      catch (error) {
        
      }  
        // const res = await axios.get("/admin/get_Widraw_Record");
        // setRcdProWidraw(res.data);
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
        rcdProWidraw.map((data)=>
        <RecordProcessedWidraw key={data._id} data={data}/>
        )
      }
    
    </Wrapper>
  </Main>
</Container>
  )
}

export default RcdProcessedWidraw
