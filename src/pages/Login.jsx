import React, { useState } from 'react'
import styled from 'styled-components'
import {Box, Stack} from "@mui/material"
import HeadingLogin from '../components/Login/HeadingLogin'
import LoginInputs from '../components/Login/LoginInputs'
import FooterLogin from '../components/Login/FooterLogin'

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
function Login() {
  

  return (
       <Container>
       <Stack spacing={2} direction='column' justifyContent='space-between' padding={2}>
      <Box flex={1}> 
      <HeadingLogin/>
      </Box>
      <Box flex={4} > 
      <LoginInputs/>
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

export default Login
