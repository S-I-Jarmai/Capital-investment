import { Favorite, Sell, Share, StoreMallDirectory } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { breakpoints } from '../utils/breakPoints'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BtnBuy = styled.button`
    align-self: center;
    height: 30px;
    width: 50%;
    align-self: center;
    margin-bottom: 10px;
    border-radius: 10px;
    border: none;
    background-color: #360336;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
`
const FeaturedImg = styled.img`
    width: 70%;
    ${breakpoints("width", "%", [
    { 1200: "90" },
    { 800: "80" },
    { 600: "80" },
    { 450: "30" }
  ])};
    margin-top: 20px;
    margin-bottom: 40px;
    object-fit: fill;
    height: 250px;
    ${breakpoints("height", "px", [
    { 1200: "250" },
    { 800: "250" },
    { 600: "250" },
    { 450: "50" }
  ])};
  
`
const Container = styled.div`
 display: flex;
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


  /* box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); */
`
const Wrapper = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Des = styled.div`
  
`
const Figures = styled.div`

`
const Texts = styled.h3`
    font-size: 20px;
    ${breakpoints("font-size", "px", [
    { 1200: "20" },
    { 800: "18" },
    { 600: "16" },
    { 450: "16" }
  ])};
    font-weight: 800;
    color: red;
    margin-bottom: 10px;
    align-self: center;
   
   
`
const TextSubs = styled.h6`
     
    
    margin-bottom: 10px;
    align-self: center;
   
`
function AdminCards(props) {
  const handleBuy = (e) =>{
    e.preventDefault()
   
  }
  return (
    <Container>
        <Wrapper>
          <FeaturedImg src={props.pic}/>
          <Des>
            <Texts>{props.name}</Texts>
            <TextSubs>Hourly</TextSubs>
            <TextSubs>Daily Profit</TextSubs>
            <TextSubs>Cycle Days</TextSubs>
            <TextSubs>Total Profit</TextSubs>
          </Des>
          <Figures>
            <Texts>{`N${props.amount}`}</Texts>
            <TextSubs>{`N${props.hour}`}</TextSubs>
            <TextSubs>{`N${props.daily}`}</TextSubs>
            <TextSubs>{`N${props.cycle}`}</TextSubs>
            <TextSubs>{`N${props.total}`}</TextSubs>
          </Figures>
          
        </Wrapper>
    </Container>
  )
}

export default AdminCards
