import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import styled from 'styled-components'
import React from 'react'
import Img from '../../images/bitcoinLogo2.png'
import { breakpoints } from '../utils/breakPoints'
import { Link } from 'react-router-dom'
const LoginButton = styled.button`
    height: 40px;
    width: 7%;
    align-self: center;
    ${breakpoints("width", "%", [
    { 1200: "20" },
    { 800: "20" },
    { 600: "23" },
    { 450: "20" }
  ])};
    ${breakpoints("height", "px", [
    { 1200: "40" },
    { 800: "40" },
    { 600: "30" },
    { 450: "25" }
  ])};
    border-radius: 10px;
    border: none;
    background-color: #24ce3b;
    padding-right: 50px;
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
const Wrapper = styled.div`
  display: none;
  ${breakpoints("display", "", [
    { 1200: "none" },
    { 800: "none" },
    { 600: "flex" },
    { 450: "flex" }
  ])};
  align-items: center;
  justify-content: space-between;
`


function HeadingLogin() {
  return (
    <Box>
      
        <Wrapper>
        <Avatar src={Img} />
        <Typography variant='subtitle2'>Haven't An Account</Typography>
        <Link to='/register' style={{color:"white", textDecoration:"none"}} > 
        <LoginButton>Register</LoginButton>
        </Link>
        </Wrapper>
      
    </Box>
  )
}

export default HeadingLogin
