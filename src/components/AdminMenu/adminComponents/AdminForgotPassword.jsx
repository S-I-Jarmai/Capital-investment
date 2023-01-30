import { FindInPage, Update } from '@mui/icons-material'
import { Box } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/breakPoints'



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
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 20px;
   
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


const AdminForgotPassword = () => {
    const [userData, setUserData] = useState(undefined);
    const [password, setValue] = useState("");
    const [q, setQ] = useState("");

    //Data to POST 
    

    const handleSearch = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.get(`/admin/getuser?q=${q}`)
            setUserData(res.data)
        } catch (err) {
            
        }
    }

    const handleupdate = async (e) =>{
        const res = await axios.put(`/admin/updateuserprofit/${userData[0]._id}`, {password})
        res.status === 200 && alert(`${userData[0].username} has been update`)
    }
    
  return (
    <Box>
         <CoverSearch>
        <SubTitle>Search by mail</SubTitle>
    <WrapSearch>
    
        <InputSearch 
        onChange={(e)=>setQ(e.target.value)}
        />
        <Button 
        onClick={handleSearch}
        > Find <FindInPage/>
    </Button>
    </WrapSearch>
    </CoverSearch>
    {
      userData &&    
    <TopCointainer>
    
    <Container>
    <Wrapper>
        <SubTitle>Personal Details</SubTitle>
        <Input readOnly placeholder='Reffered By'
        value="Refferd By"
        />
        <Input readOnly placeholder='First Name'
        name='firstname'
        value={`First Name: ${userData[0].firstname}`}
        />
        <Input readOnly placeholder='Last Name'
        name='lastname'
        value={`Last Name: ${userData[0].lastname}`}
        />
        <Input readOnly placeholder='Username'
        name='username'
        value={`Username: ${userData[0].username}`}
        
        />
        <Input readOnly placeholder='Phone Number'
        name='phonenumber'
        value={`Phone Number: 0${userData[0].phonenumber}`}
        />
        </Wrapper>
    <Wrapper>
        <SubTitle>Login Details</SubTitle>         
        <Input readOnly placeholder='Email'
        name='email'
        value={`Email: ${userData[0].email}`}
        />
        <SubTitle>Account Info</SubTitle>
    
        <Input readOnly placeholder='Total Balance'
        name='cfmemail'
        value={`Total Amount: ${userData[0].totalamount}`}
        
        />
        <Input readOnly placeholder='Available Balance'
        value={`Available Balance: ${userData[0].availablebalance}`}
        
        />
    </Wrapper>
    <Wrapper>
        <SubTitle>Bank and Plan Details</SubTitle>
        <Input readOnly placeholder='Account Name'
        value={`Account Name: ${userData[0].accname}`}
        name='accname'
    />
        <Input readOnly placeholder='Account Number'
        value={`Account Number: ${userData[0].accnumber}`}
        name='accnumber'       
        />
        <Input readOnly placeholder='Bank Name'
        value={`Bank Name: ${userData[0].bankname}`}
        name='bankname'
        />  
    </Wrapper>
    <Wrapper>
        <SubTitle>Passport</SubTitle>
        <UserImg src={userData[0].img}/> 
    </Wrapper>
   </Container>
   <BtnContainer>

<SubTitle>New Password</SubTitle>

<Input type='text' placeholder='New Password'
onChange={(e)=>setValue(e.target.value)}
/>
   <BtnRest
   onClick={handleupdate}>
    Update
    <Update/>
   </BtnRest>
   </BtnContainer>   
    </TopCointainer>
    }
    </Box>
  )
}

export default AdminForgotPassword
