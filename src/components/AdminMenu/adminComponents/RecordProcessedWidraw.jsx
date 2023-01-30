import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {format} from "timeago.js"
import axios from 'axios'



const Container = styled.div`
    /* width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000a7; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`
const Wrapper = styled.div`
    width: 600px;
    height: 700px;
    padding: 10px 20px;
    background-color: #410941;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
`
const Close = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`
const Title = styled.h1`
margin-top: 5px;
text-align: center;
`
const Input = styled.input`
border: 1px solid black;
color: black;
font-size: 16px;
border-radius: 3px;
padding: 10px;
background-color: white;
:focus{
  outline: none;
}
`
const Desc = styled.textarea`
border: 1px solid ${({theme})=> theme.soft};
color: ${({theme})=> theme.text};
border-radius: 3px;
padding: 10px;
background-color: transparent;
`
const BtnProcess = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: red;
color: white;
`
const BtnProcessed = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: green;
color: white;
`
const Label = styled.label`
font-size: 18px;
`

//USER INFO
const Info = styled.span`
    font-size: 18px;
    margin-top: 10px;
    color: red;
`
 
const Image = styled.img`
 width: 500px;
 height: 700px;
`
const Buttons = styled.div`
display: flex;
gap: 20px;
`

const Hr = styled.hr`
margin: 10px 0px;
border: 0.5px solid ${({theme}) => theme.soft};
`
const ChannelInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
    gap: 10px;
    flex: 1;
`
const ChannelDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex: 7;
    align-items: center;
    justify-content: space-between;
`
const ChannelName = styled.span`
display: flex;
gap: 20px;
flex-direction: column;
font-weight: bolder;  
color: ${({theme})=>theme.text};
`
const ChannelCounter = styled.span`
font-size: 18px;
font-weight: 400;
color: ${({theme})=> theme.textSoft};
`
const Text = styled.div`
margin: 10px 0px 0px 45px;
font-weight: 400px;
color: ${({theme})=>theme.text};
`
const LogoImg = styled.img`
width: 200px;
height: 200px;
border-radius: 50%;

`
const SubscribeBTN = styled.button`
background-color: green;
border: none;
border-radius: 4px;
color: white;
padding: 10px 20px;
cursor: pointer;
`
const VideoFrame = styled.div`
    /* max-height: 720px;
    width: 100%;
    object-fit: cover; */
    
    
`
const DecsContent = styled.div`
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
`
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: ${({theme})=>theme.textSoft};

`

function RecordProcessedWidraw({data}) {
 
       
    
    
  return (
    <Container>
         <DecsContent>
            <Hr/>
            <Title>USER INFO</Title>
        <Details>
            <Info>{`Processed ${format(data.createdAt)}`}</Info>
            <Buttons>
                  
            </Buttons>
        </Details>
        <Hr/>
        <ChannelInfo>
           <LogoImg src={data.img}/>
           <ChannelDetails>
            <ChannelName> 
             <ChannelCounter>
             <b><span style={{color:"red"}}>Email:</span> {data.email} </b>
             </ChannelCounter>
             <ChannelCounter>
             <b><span style={{color:"red"}}>Phone Number:</span> {data.phonenumber} </b>
             </ChannelCounter>
             <b><span style={{color:"red", fontWeight:"bolder"}}>User ID:</span> {data.userId} </b>
            </ChannelName>
           </ChannelDetails>
           </ChannelInfo>
           
           <Hr/>    
            </DecsContent>
            <Hr/> 
    <Wrapper>
      
      <Title>Processed Widrawal Record</Title>
      <Label>Account Number:</Label>
      <Input readOnly type='number' value={data.accnumber}
      name ='accnumber'/>
      <Label>Account Name:</Label>
       <Input readOnly      value={data.accname}
      name ='accname'/>
      <Label>Bank Name:</Label> 
       <Input readOnly type='text'  value={data.bankname}
      name ='bankname'/>
      <Label>Total Amount:</Label>
       <Input readOnly type='number' value={data.totalamount}
      name ='totalamount'/>
      <Label>Available Balance:</Label>
       <Input readOnly type='number'  value={data.availablebalance}
      name ='availablebalance'/>
      <Label>Widrawed Amount :</Label>
       <Input readOnly type='number' value={data.amount}
      name ='amountwidraw'/>
    </Wrapper>
                   
      
  </Container>
  )
}

export default RecordProcessedWidraw
