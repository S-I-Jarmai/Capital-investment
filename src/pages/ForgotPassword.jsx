import { Box, Stack } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import FooterLogin from '../components/Login/FooterLogin'
import HeadingLogin from '../components/Login/HeadingLogin'
import ResetInputs from '../components/ResetPword/ResetInputs'
import { breakpoints } from '../components/utils/breakPoints'

const Container = styled.div`
    background-color: #360336;
    height: 100vh;
    color: white;
`
const CenterFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
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

  ])};
    padding-left: 20px;
    :focus{
        outline: none;        
    }
`
function ForgotPassword() {
  return (
    <Container>
        <Stack spacing={2} direction='column' justifyContent='space-between' padding={2}>
        <Box flex={1}>
            <HeadingLogin/>
        </Box>
        <Box flex={4} > 
        <ResetInputs/>
      </Box>
      <Box flex={2} > 
      <CenterFooter>
      <FooterLogin/>
      </CenterFooter>
      </Box>
        </Stack>
    </Container>
  )
}

export default ForgotPassword
