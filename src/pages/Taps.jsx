import { AppBar, Box, Grid, Paper, Stack } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import React, { useState } from 'react'
import { ContactsRounded, Home, People, Wallet } from '@mui/icons-material';
import styled from 'styled-components';
import HomePage from '../components/Home/Home';
import { breakpoints } from '../components/utils/breakPoints';
import { Link } from 'react-router-dom';


const Container = styled.div`
    width: 100%;
    
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
    justify-content: center;
    
`
function Taps() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Box bgcolor={'#360336'}>
      <Container>
          <Wrapper>
      <AppBar sx={{backgroundColor:'#360336', marginBottom:'20px', maxWidth:'2000px'}}> 
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" position='sticky' spacing={10}  >
            <Link to='/register' style={{textDecoration: "none", backgroundColor: "white"}}>
            <Tab sx={{fontSize: '10px', marginLeft:{xs: '', lg: '480px'}, backgroundColor:'white' }}  icon={<Home/>} label="Home"/>           
            </Link>
            <Tab sx={{fontSize: '10px', backgroundColor:'white'}}  icon={<ContactsRounded/>} label="Contract" />
            <Link to='/my_wallet' style={{textDecoration: "none", backgroundColor: "white"}}>
            <Tab sx={{fontSize: '10px', backgroundColor:'white'}}  icon={<Wallet/>} label="Wallet" /> 
            </Link>
            <Tab sx={{fontSize: '10px', backgroundColor:'white'}}  icon={<People/>} label="Team" />
                        
    </Tabs>
      </AppBar>
      
    <Stack spacing={2} direction='column' justifyContent='space-between' padding={1} marginTop={10}>  
    <HomePage/>
    </Stack> 
    
    </Wrapper>
        </Container>        
    </Box>
  
  )
}

export default Taps
