import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {format} from "timeago.js"
import { async } from '@firebase/util';
import axios from 'axios';


const Container = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 20px;
`
const Content = styled.div`
flex: 5;
`

const VideoWrapper = styled.div`
    display: flex;
    gap: 10px;
    
`
const Title = styled.h1`
font-size: 16px;
font-weight: 500px;
color: ${({theme})=>theme.text};
margin-top: 10px;
`
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: ${({theme})=>theme.textSoft};

`
const Info = styled.span`
    font-size: 16px;
    margin-top: 10px;
    color: red;
`
 
const Image = styled.img`
 width: 500px;
 height: 700px;
 border: 1px solid black;
`
const Buttons = styled.div`
display: flex;
gap: 20px;
`
const Button = styled.button`
display: flex;
align-items: center;
gap: 5px;
color: ${({theme})=>theme.text};
font-size: 12px;
background-color: transparent;
border: none;
cursor: pointer;
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
    display: flex;
    flex-direction: column;
`

function RecordActivatePlan({getAllRecord}) {
    
    
    
    // const handlePlan = async (e) =>{
    //     const res = await axios.put(`/admin/cfrmplan/${userId}`,{totalamount})
    //     res.status === 200 && alert(`${userEmail} plan has been activated!`)
    // }

    return (
    <Container> 
    <Content>
        <VideoWrapper>
            <Image src={getAllRecord.paymentImg}/> 
            <DecsContent>
            <Hr/>
            <Title>{getAllRecord.userName}</Title>
            <Title>{getAllRecord.planName}</Title>
            <Title>{getAllRecord.userdailyprofit}</Title>
        <Details>
        
            <Info> {`Posted ${format(getAllRecord.createdAt)}`}</Info>
            <Buttons>
                  
            </Buttons>
        </Details>
        <Hr/>
        <ChannelInfo>
           <LogoImg src={getAllRecord.userImg}/>
           <ChannelDetails>
            <ChannelName> 
            <b><span style={{color:"red", }}>Email:</span> {getAllRecord.userEmail} </b>

             <ChannelCounter>
             <b><span style={{color:"red",}}>Tel: </span>0{getAllRecord.userPhnumber}</b>
             </ChannelCounter>
             <b><span style={{color:"red"}}>User ID: </span>{getAllRecord.userId}</b>
             <ChannelCounter>
                
             </ChannelCounter>
            </ChannelName>
            
           </ChannelDetails>
           </ChannelInfo>
           
           <Hr/>    
            </DecsContent>
            <Hr/>                 
        </VideoWrapper>
    </Content>   
</Container>
  )
}

export default RecordActivatePlan
