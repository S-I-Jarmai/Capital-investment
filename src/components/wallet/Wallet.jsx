import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../utils/breakPoints'
import wallet from '../../images/wallet.jpg'
import { Grid, Paper } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { async } from '@firebase/util'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContect'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'


const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #360336;
${breakpoints("max-width", "px", [
{ 1200: "1024" },
{ 800: "1024" },
{ 600: " " },
{ 450: " " }
])};

${breakpoints("padding-left", "%", [
{ 1200: "20" },
{ 800: "20" },
{ 600: "0" },
{ 450: "0" }
])};

`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
${breakpoints("flex-direction", "", [
{ 1200: "row" },
{ 800: "row" },
{ 600: "row" },
{ 450: "column" }
])};
justify-content: center;
align-items: center;

`
const BtnBuy = styled.button`
align-self: center;
height: 30px;
width: 50%;
align-self: center;
margin-bottom: 10px;
border-radius: 10px;
border: none;
background-color: #24ce3b;
color: white;
font-size: 14px;
font-weight: bold;
cursor: pointer;
text-align: center;
margin-top: 10px;
`
const Btn = styled.button`
align-self: center;
height: 30px;
width: 50%;
align-self: center;
margin-bottom: 10px;
border-radius: 10px;
border: none;
background-color: red;
color: white;
font-size: 14px;
font-weight: bold;
cursor: pointer;
text-align: center;
margin-top: 10px;
`
const FeaturedImg = styled.img`
width: 100%;
margin-top: 20px;
margin-bottom: 40px;
object-fit: fill;
height: 150px;


`
const CutCard = styled.div`
 display: flex;
${breakpoints("display", "", [
{ 1200: "none" },
{ 800: "none" },
{ 600: "flex" },
{ 450: "flex" }
])};
flex-direction: column;
`
const CardContainer = styled.div`

width: 300px;
flex-direction: column;
padding-left: 10px;
padding-right: 10px;
margin-top: 10px;
border-radius: 12px;
border: 1px solid white;
background-color: #ffffffc7;
box-shadow: -3px 13px 46px 18px rgba(0,0,0,0.36);
-webkit-box-shadow: -3px 13px 46px 18px rgba(0,0,0,0.36);
-moz-box-shadow: -3px 13px 46px 18px rgba(0,0,0,0.36);
align-self: center;

margin-top: 30px;
/* box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); */
`
const CardWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
const Des = styled.div`

`
const Figures = styled.div`

`
const Texts = styled.h3`
font-size: 50px;
${breakpoints("font-size", "px", [
{ 1200: "50" },
{ 800: "10" },
{ 600: "20" },
{ 450: "16" }
])};
font-weight: 800;
color: red;
margin-bottom: 10px;
align-self: center;
display: none;
${breakpoints("display", "", [
{ 1200: "block" },
{ 800: "block" },
{ 600: "block" },
{ 450: "block" }
])};
`
const TextSubs = styled.h6`
 

margin-bottom: 10px;
align-self: center;

`

//GOS HERE
const InputContainer = styled.div`
display: flex;
flex-direction: row;
${breakpoints("flex-direction", "", [
{ 1200: "row" },
{ 800: "row" },
{ 600: "column" },
{ 450: "column" }
])};
width: 100%;
color: ${({theme})=>theme.text};


`
const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px 40px;



`
const Title = styled.h1`
font-size: 20px;
margin-top: 30px;
padding-top: 10px;
color: red;
align-self: center;
margin-bottom: 10px;
padding-left: 10px;
`
const SubTitle = styled.h5`
text-align: left;
padding-left: 10px;


`
const Input = styled.input`
border: 1px solid #24ce3b;
background-color: white;
border-radius: 5px;
padding: 10px 0px 10px 5px;
padding-right: 50px;
${breakpoints("padding-right", "px", [
{ 1200: 30 },
{ 800: 20 },
{ 600: 5 },
{ 450: 0 }
])};
width: 100%;
:focus{
outline: none;
}

`
const InputFile = styled.input`
border: 1px solid #24ce3b;
background-color: white;
border-radius: 5px;
padding: 10px 0px 10px 5px;
padding-right: 50px;
${breakpoints("padding-right", "px", [
 { 1200: 30 },
 { 800: 20 },
 { 600: 5 },
 { 450: 0 }
])};

width: 100%;
color: black;
:focus{
 outline: none;
}
`

const UserInfo = styled.div`
    height: 200px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
const UserIMG = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50px;
`
const TitleSuper = styled.h2`
margin-top: 20px;
align-self: center;
color: white;
`



const Wallet = () => {
   // const {currentUser} = useSelector((state)=>state.user)
   const {currentUser} = useContext(AuthContext) 
   const {email} = currentUser
   const [user, setUser] = useState({}) 
    useEffect(()=>{
        const fetchData = async () =>{
          const q = query(collection(db, "user"),
          where("email", "==", email)
          );
          try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) =>{
              setUser(doc.data())
            })
          } catch (error) {
            alert(error)
          }
           
        }
        fetchData()
    },[email])
    
  return (
    <Container>
    <Wrapper>
     <CutCard>
     <TitleSuper>MY WALLET</TitleSuper>
    <CardContainer>
     <CardWrapper> 
       <FeaturedImg src={wallet}/>
       <UserInfo>
            <UserIMG src={user.imgUrl}/>
            <SubTitle>{user.accname}</SubTitle>
            <SubTitle>{user.email}</SubTitle>
       </UserInfo>
     </CardWrapper>
 </CardContainer>
 </CutCard>
 <InputContainer> 
 <InputWrapper>
 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Paper sx={{height:'100%', backgroundColor:'white'}}>
              <Title>{user.availablebalance}</Title>
              <SubTitle>Total Asset</SubTitle>
          </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper sx={{height:'100%', backgroundColor:'white'}}>
              <Title>{user.availablebalance}</Title>
              <SubTitle>Available Balance</SubTitle>
          </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper sx={{height:'100%', backgroundColor:'white'}}>
              <Title>{user.widrawalstatus}</Title>
              <SubTitle>Widrawal Status</SubTitle>
          </Paper>
        </Grid>
        <Grid item xs={6}>

        <Paper sx={{height:'100%', backgroundColor:'white'}}>
              <Title>Active</Title>
              <SubTitle>{user.activatedPlan}</SubTitle>
          </Paper>
        </Grid>
      </Grid> 
      
 </InputWrapper>
 </InputContainer>
 
    </Wrapper>
  </Container>
  )
}

export default Wallet
