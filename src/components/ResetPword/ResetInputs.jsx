import React,{useState} from 'react'
import styled from 'styled-components'
import { breakpoints } from '../utils/breakPoints'
import { Avatar, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import {Home, Lock, LockOpen} from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import Img from '../../images/img.jpg'
import Avater from '../../images/avaTar.png'

import { useDispatch } from 'react-redux'


import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice'
import axios from 'axios'
import Message from '../Message/Message'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const LoginWrapper = styled.div`
    margin-top: 40px;
    width: 70%;
    height: 90%;
    display: flex;
    flex-direction: row;
    ${breakpoints("flex-direction", "", [
    { 1200: "none" },
    { 800: "none" },
    { 600: "column" },
    { 450: "column" }
  ])};
`
const LoginLeft = styled.div`
    flex: 1;
    display: flex;
    margin-top: 20px;
    ${breakpoints("margin-top", "px", [
    { 1200: "20" },
    { 800: "20" },
    { 600: "30" },
    { 450: "30" }
  ])};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const LoginLogo = styled.h6`
    font-size: 30px;
    ${breakpoints("font-size", "px", [
    { 1200: "30" },
    { 800: "22" },
    { 600: "20" },
    { 450: "24" }
  ])};
    font-weight: 800;
    margin-bottom: 10px;
    align-self: center;
`
const LoginLogoS = styled.h3`
    font-size: 50px;
    ${breakpoints("font-size", "px", [
    { 1200: "50" },
    { 800: "10" },
    { 600: "20" },
    { 450: "18" }
  ])};
    font-weight: 800;
    color: #060733;
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
const LoginDecs = styled.span`
    font-size: 16px;
    ${breakpoints("font-size", "px", [
    { 1200: "14" },
    { 800: "12" },
    { 600: "11" },
    { 450: "11" }
  ])};
  margin: 20px 0px;
`
const LoginRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`
const LoginBox = styled.div`
    height: 450px;
    ${breakpoints("height", "px", [
    { 1200: "550" },
    { 800: "500" },
    { 600: "500" },
    { 450: "250" }
  ])};
    padding: 20px;
    background-color: #ffffff2f;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
    
`
const LoginInput = styled.input`

    height: 50px;
    ${breakpoints("height", "px", [
    { 1200: "50" },
    { 800: "40" },
    { 600: "30" },
    { 450: "25" }
  ])};
    border-radius: 10px;
    border: 1px solid #24ce3b;
    font-size: 18px;
    ${breakpoints("font-size", "px", [
    { 1200: "18" },
    { 800: "14" },
    { 600: "11" },
    { 450: "10" }
  ])};
    padding-left: 20px;
    :focus{
        outline: none;        
    }
`
const LoginButton = styled.button`
    height: 50px;
    width: 100%;
    align-self: center;
    ${breakpoints("width", "%", [
    { 1200: "50" },
    { 800: "40" },
    { 600: "30" },
    { 450: "50" }
  ])};
    ${breakpoints("height", "px", [
    { 1200: "50" },
    { 800: "40" },
    { 600: "30" },
    { 450: "25" }
  ])};
    border-radius: 10px;
    border: none;
    background-color: red;
    :disabled{
      background-color: #bbb3b3c8;
      cursor: not-allowed;
    }
    color: white;
    font-size: 20px;
    ${breakpoints("font-size", "px", [
    { 1200: "19" },
    { 800: "15" },
    { 600: "12" },
    { 450: "11" }
  ])};
    font-weight: 500;
    cursor: pointer;
`
const LoginForgotPword = styled.span`
    text-align: center;
    color: blue;
    ${breakpoints("font-size", "px", [
    { 1200: "19" },
    { 800: "15" },
    { 600: "12" },
    { 450: "11" }
  ])};
`
const LoginRegister = styled.button`
    width: 60%;
    height: 50px;
    ${breakpoints("height", "px", [
    { 1200: "50" },
    { 800: "40" },
    { 600: "30" },
    { 450: "25" }
  ])};
  ${breakpoints("display", "", [
    { 600: "none" },
    { 450: "none" }
  ])};
    border-radius: 10px;
    border: none;
    align-self: center;
    background-color: #1b4711;
    color: white;
    font-size: 20px;
    ${breakpoints("font-size", "px", [
    { 1200: "19" },
    { 800: "15" },
    { 600: "12" },
    { 450: "11" }
  ])};
    font-weight: 500;
    cursor: pointer;
`
const FeaturedImg = styled.img`
    width: 70%;
    ${breakpoints("width", "%", [
    { 1200: "90" },
    { 800: "80" },
    { 600: "80" },
    { 450: "60" }
  ])};
    margin-top: 20px;
    margin-bottom: 40px;
    object-fit: cover;
    opacity: 0.7 ;
    height: 250px;
    ${breakpoints("height", "px", [
    { 1200: "250" },
    { 800: "250" },
    { 600: "250" },
    { 450: "130" }
  ])};
`
const DivideFormControl = styled.div`
  display: flex;
  justify-content: space-between;
  
`

function ResetInputs() {
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [screateKey, setS_key] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogin = async (e) =>{
      e.preventDefault();
       try {
        const res = await axios.post('/users/reset', {email, screateKey});    
        res.status === 200 && handleOpen()
        } catch (err) {
          alert(err)
       }
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false)
  const message = {
    title: 'Forgot Password Nofication',
    body: 'Your password retrieval has been received, contact your Admin'
  }
  return (
    <Container> 
      <LoginWrapper>
      <LoginLeft>
        <LoginLogo>RETRIEVE YOUR PASSWORD</LoginLogo>
        <LoginDecs>Provide your secrete key to get your password back!</LoginDecs>
        <LoginDecs>Your password retrieval will be processed in less than a day</LoginDecs>
      </LoginLeft>
      <LoginRight>
            {/* <LoginLogoS>CAPITAL INVESTMENT</LoginLogoS> */}
        <LoginBox>
            <LockOpen sx={{alignSelf:'center'}}/>

        <LoginInput placeholder='Enter your secrete key' onChange={(e)=>setS_key(e.target.value)} />
        <LoginInput placeholder='Enter your email address' onChange={(e)=>setEmail(e.target.value)} />
        <LoginButton
        onClick={handleLogin}
        >Reset</LoginButton>
        <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        <Typography sx={{alignSelf:"end", }}>Login</Typography>
        </Link>
        </LoginBox>
      </LoginRight>
      </LoginWrapper>
      <Message message={message} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} open={open}/>
    </Container>
  )
}

export default ResetInputs
