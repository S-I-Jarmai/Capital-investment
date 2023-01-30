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
import {addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc} from "firebase/firestore"
import { db } from '../../../firebase';


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

function ActivatePlan({deleteId,userdailyprofit, planName, planAmount, paymentImg, userImg, userPhnumber, userEmail, userName, userId, timeStamp}) {
    
    const availablebalance = planAmount
    const activatedPlan = planName
    
    const handlePlan = async (e) =>{
      const updateUser = doc(db, "user", userId);
      await updateDoc(updateUser, {
        availablebalance, activatedPlan, userdailyprofit
      });
      await addDoc(collection(db, "rcdactivedplam"),{
        planName,userdailyprofit, planAmount,
        paymentImg, userId, userPhnumber, 
        userEmail, userName,
        timeStamp: serverTimestamp()
      })
      await deleteDoc(doc(db, "reqtobuyplans", deleteId));
      alert('plan has been activated!')
      // const res = await axios.put(`/admin/cfrmplan/${userId}`,{totalamount, planName, userdailyprofit})
        // res.status === 200 && alert(`${userEmail} plan has been activated!`) 
        // const postActi = await axios.post("/admin/list_activate_plans",{planName,userdailyprofit, planAmount, paymentImg, userId, userPhnumber, userEmail, userName})
        // postActi.status === 200 && await axios.delete(`/admin/delete_acti_plans/${deleteId}`)
        
    }
                                                                                    
    return (
    <Container> 
    <Content>
        <VideoWrapper>
            <Image src={paymentImg}/> 
            <DecsContent>
            <Hr/>
            <Title>{planName}</Title>
            <Title>{planAmount}</Title>
            <Title>Daily Profit: {userdailyprofit}</Title>
        <Details>
        
            {/* <Info> {`Requested ${timeStamp}`}</Info> */}
            <Buttons>
                  
            </Buttons>
        </Details>
        <Hr/>
        <ChannelInfo>
           <LogoImg src={userImg}/>
           <ChannelDetails>
            <ChannelName>
                 
             <ChannelCounter>
             <b><span style={{color:"red"}}>Email: </span>{userEmail} </b>
             </ChannelCounter>
             <ChannelCounter>
             <b><span style={{color:"red"}}>Tel: </span>   0{userPhnumber} </b>
             </ChannelCounter>
             
            </ChannelName>
            <SubscribeBTN 
            onClick={handlePlan}>
                PROCESS
            </SubscribeBTN>
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

export default ActivatePlan
