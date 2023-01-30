import React, { useContext } from 'react'
import { Box, Grid, imageListItemClasses, Paper, Stack } from '@mui/material'
import styled from 'styled-components';
import wallet from '../../images/wallet.jpg'
import withdrawal from '../../images/withdrawal.png'
import deposit from '../../images/deposit.png'
import telephone from '../../images/telephone.png'
import silver from '../../images/silver.jpg'
import Cards from '../Card/Cards';
import SlideImages from '../slideImages/SlideImages';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {format} from "timeago.js"
import { db } from '../../firebase';
import { collection, doc, getDocs, onSnapshot, query, where} from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContect';

const Title = styled.h3`
    color: red;
    padding-top: 5px;
    margin: 5px 0px 10px 10px;
`
const SubTitle = styled.h5`
padding-top: 5px;
    margin: 5px 0px 10px 10px;
`
const WidrawBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    border: 1px solid white;
    padding: 10px;
    background-color: white;
`
const IconsBox = styled.img`
  width: 36px;
  height: 36px;
  border: 1px solid gray;
  padding: 5px;
`
const SurronICONS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
` 
const TextSubs = styled.h5`
    color: #060733;
    margin-bottom: 10px;
    align-self: center;
   `

function Home() {
  //const {currentUser} = useSelector((state)=>state.user) 
  const [planFetch, setPlanFetch] = useState([])
  const {currentUser} = useContext(AuthContext)
  const {email} = currentUser
  const [userInfo, setUserInfo] = useState({});
 
  useEffect(()=>{
    const fetchUSer = async ()=>{
      const q = query(collection(db, "user"),
      where("email", "==", email)
      );
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>{
          setUserInfo(doc.data())
        })
      } catch (error) {
        alert(error)
      }    
    }
    fetchUSer();
  },[email])
  

  useEffect(()=>{
    const fetchData = async () =>{
      let list = [];
      try {
      const querySnapshots = await getDocs(collection(db, "plans"));
      querySnapshots.forEach((doc) =>{
        list.push({id: doc.id, ...doc.data()});
      });
      setPlanFetch(list)
      //console.log(planFetch);
      } catch (error) {
        
      }
    }
    fetchData()
  },[])
  
  // useEffect(()=>{
  //   const fetchPlan = async ()=>{
  //     const res = await axios.get("/plans/getplans");
  //     setPlanFetch(res.data)
  //   }
  //   fetchPlan();
  // },[])
  
  return (
    <Box bgcolor={'#360336'}>
          <SlideImages/>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Paper sx={{height:'100%', backgroundColor:'white'}}>
              <Title>{userInfo.activatedPlan}</Title>
              <SubTitle>Total Assets</SubTitle>
          </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper sx={{height:'100%', backgroundColor:'white'}}>
              <Title>{userInfo.availablebalance}</Title>
              <SubTitle>Available Balance</SubTitle>
          </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper sx={{height:'100%', backgroundColor:'white'}}>
              <Title>{userInfo.widrawalstatus}</Title>
              <SubTitle>Widrawal Status</SubTitle>
          </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper sx={{height:'100%', backgroundColor:'white'}}>
              <Title>{userInfo.email}</Title>
              <SubTitle>You Joined Us</SubTitle>
          </Paper>
        </Grid>
      </Grid> 
      <WidrawBox>

          <SurronICONS><IconsBox src={deposit}/>
            <TextSubs>Deposit</TextSubs>
            </SurronICONS>
          <SurronICONS>
          <Link to='/widraw' style={{textDecoration: "none", backgroundColor: "white"}}>
          <IconsBox src={withdrawal}/>
            <TextSubs>Widraw</TextSubs>
            </Link>
            </SurronICONS>
            <SurronICONS>
            <Link to='/my_wallet' style={{textDecoration: "none", backgroundColor: "white"}}>
            <IconsBox src={wallet}/>
            <TextSubs>Wallet</TextSubs>
            </Link>
            </SurronICONS>
            <SurronICONS>
            <IconsBox src={telephone}/>
            <TextSubs>About Us</TextSubs>
            </SurronICONS>
      </WidrawBox>  
      {
        planFetch.map((plan)=>
          <Cards key={plan.uid} name={plan.name} amount={plan.amount} hour={plan.hour} 
          daily={plan.daily} cycle={plan.cycle} total={plan.totalprofit} 
          pic={plan.imgUrl} plan={plan} />
        )
      }      
    </Box>
  )
}

export default Home
