import React,{useState} from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../components/utils/breakPoints'
import { Avatar, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import {Home, Lock, LockOpen} from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import Img from '../../images/img.jpg'
import Avater from '../../images/avaTar.png'

import { useDispatch } from 'react-redux'


import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice'
import axios from 'axios'
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from '../../firebase'
import { useContext } from 'react'
import {AuthContext} from "../../context/AuthContect"


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
    { 450: "10" }
  ])};
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
    background-color: #24ce3b;
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
const SpanError = styled.span`
    align-self: center;
    color: red;
    font-weight: 500;
`

function LoginInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  //const dispatch = useDispatch()
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)

  const handleLogin = async (e) =>{
      e.preventDefault();
      //dispatch(loginStart())
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        console.log(user.email);
        
        if(user.email === "admin@test.com"){
          navigate(`/admin/${user.uid}`)
        }
        else{
          navigate(`/home/${user.uid}`) 
        }
        
        
      })
      .catch((error)=>{
        setError(true)
      })
      
      // try {
      //   const res = await axios.post('/auth/signin', {email, password});    
      //   if(res.data.isAdmin === true){ 
      //     dispatch(loginSuccess(res.data)) && navigate(`/admin/${res.data._id}`)
      //   }
      //   else if(res.data.isAdmin === false){
      //     dispatch(loginSuccess(res.data)) && navigate(`/home/${res.data._id}`)
      //   }
        
      // } catch (err) {
      //   dispatch(loginFailure())
      //   alert("Invalid Credentials")
      // }
  }

  return (
    <Container> 
      <LoginWrapper>
      <LoginLeft>
        <LoginLogo>KUDA FINANCE</LoginLogo>
        <LoginDecs>Fund and Step out from poverty !</LoginDecs>
        <FeaturedImg src={Avater}/>
      </LoginLeft>
      <LoginRight>
        <LoginBox>
            <LockOpen sx={{alignSelf:'center'}}/>
        <LoginInput placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <LoginInput type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        <Link to='/resetpassword' style={{textDecoration: 'none', color: 'white'}}>
        <Typography sx={{alignSelf:"end"}}>Forgot Password?</Typography>
        </Link>
        <LoginButton
        onClick={handleLogin}
        >Log In</LoginButton>
        {error&&<SpanError >Wrong email or password!</SpanError>}
        <Link to='/register'>
        <LoginRegister>Create Account</LoginRegister>
        </Link>
        </LoginBox>
      </LoginRight>
      </LoginWrapper>
    </Container>
  )
}

export default LoginInputs
