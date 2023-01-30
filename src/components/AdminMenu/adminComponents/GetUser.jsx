import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/breakPoints'
import {Box} from '@mui/material'
import { Delete, FindInPage } from '@mui/icons-material'
import { useState } from 'react'
import { useEffect } from 'react'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../firebase'
import axios from 'axios'

const Container = styled.div`
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
const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px 40px;
color: white; 
`
const Title = styled.h1`
font-size: 24px;
margin-top: 30px;
color: green;
text-decoration: underline;

`
const SubTitle = styled.h4`
text-align: left;
font-weight: bold;
color: #24ce3b;
`
const Input = styled.input`
border: 1px solid #24ce3b;
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
color: white;
:focus{
    outline: none;
}
`
const BtnRest = styled.button`
font-weight: 500;
border: none;
border-radius: 3px;
padding: 10px 20px;
cursor: pointer;
background-color: #df2121;
color: white;
display: flex;
align-items: center;
gap: 20px;
margin-bottom: 20px;
`

const Button = styled.button`
font-weight: 500;
font-size: 18px;
border: none;
border-radius: 3px;
padding: 10px 20px;
cursor: pointer;
background-color: #239432;
color: white;
display: flex;
align-items: center;
gap: 20px;
margin-bottom: 20px;
`

const Links = styled.div`
display: flex;
align-items: center;
gap: 30px;
margin-left: 45px;
`
const TopCointainer = styled.div`
    background-color: black;
    
    ${breakpoints("height", "%", [
    { 600: 100 },
    { 450: 100 }
  ])};
    display: flex;
    flex-direction: column;
    align-items: center;    
`
const BtnContainer = styled.div`
    display: flex;
    gap: 50px;
   
    align-items: center; 
`

const CoverSearch = styled.div`
    width: 40%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 10px 0px; 
`
const WrapSearch = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
gap: 10px;

color: white; 
`
const InputSearch = styled.input`
border: 1px solid #24ce3b;
border-radius: 5px;
padding: 10px 0px 10px 5px;
padding-right: 50px;
${breakpoints("padding-right", "px", [
    { 1200: 30 },
    { 800: 20 },
    { 600: 5 },
    { 450: 0 }
  ])};
font-size: 18px;
font-weight: bold;
width: 100%;
height: 30px;
:focus{
    outline: none;
}
`
const UserImg = styled.img`
    width: 300px;
    height: 300px;
`
function GetUser() {
    const [userData, setUserData] = useState({});
    const [searchEmail, setSearch] = useState("")
    const handleSearch = async (e) =>{
        e.preventDefault();
        try {
            const q = query(collection(db, "user"),
            where("email", "==", searchEmail)
            );
            try {
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) =>{
                   setUserData(doc.data())
                })
            } catch (error) {
                
            }
            // const res = await axios.get(`/admin/find/${searchId}`);
            // setUserData(res.data);
        } catch (err) {
            
        }
    }
    // useEffect(()=>{
    //     const fetchUser = async () =>{
    //         const res = await axios.get(`/admin/find/${searchId}`);
    //         setUserData(res.data);
    //     }
    //    searchId&& fetchUser()
    // },[searchId])
  return (
    <Box>
        <CoverSearch>
        <SubTitle>Search by id</SubTitle>
    <WrapSearch>
    
        <InputSearch 
        onChange={(e)=>setSearch(e.target.value)}
        />
        <Button 
        onClick={handleSearch}> Find <FindInPage/>
    </Button>
    </WrapSearch>
    </CoverSearch>
    <TopCointainer>
    
    <Container>
    <Wrapper>
        <SubTitle>Personal Details</SubTitle>
        <Input readOnly placeholder='Reffered By'
        value={userData.referredby}
        />
        <Input readOnly placeholder='First Name'
        name='firstname'
        value={userData.firstname}
        />
        <Input readOnly placeholder='Last Name'
        name='lastname'
        value={userData.lastname}
        />
        <Input readOnly placeholder='Username'
        name='username'
        value={userData.username}
        
        />
        <Input readOnly placeholder='Phone Number'
        name='phonenumber'
        value={userData.phonenumber}
        />
        </Wrapper>
    <Wrapper>
        <SubTitle>Login Details</SubTitle>         
        <Input readOnly placeholder='Email'
        name='email'
        value={userData.email}
        />
        <SubTitle>Account Info</SubTitle>
        
        <Input readOnly placeholder='Available Balance'
        value={userData.availablebalance}
        name='cfmpassword'
        />
    </Wrapper>
    <Wrapper>
        <SubTitle>Bank Details</SubTitle>
        <Input readOnly placeholder='Account Name'
        value={userData.accname}
        name='accname'
    />
        <Input readOnly placeholder='Account Number'
        value={userData.accnumber}
        name='accnumber'       
        />
        <Input readOnly placeholder='Bank Name'
        value={userData.bankname}
        name='bankname'
        />      
    </Wrapper>
    <Wrapper>
        <SubTitle>Passport</SubTitle>
        <UserImg src={userData.imgUrl}/>    
    </Wrapper>
   </Container>
   <BtnContainer>
   </BtnContainer>   
    </TopCointainer>
    </Box>
  )
}

export default GetUser
