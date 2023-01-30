import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { breakpoints } from '../../utils/breakPoints'
import { Done, FindInPage } from '@mui/icons-material'
import {format} from 'timeago.js'
import Message from '../../Message/Message'


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
    height: 300px;
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
const Title = styled.h2`
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
const InputReset = styled.input`
border: 1px solid black;
color: black;
font-size: 16px;
border-radius: 3px;
padding: 5px;
padding-left: 10px;
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
gap: 10px;
flex-direction: column;
align-items: flex-start;
font-weight: bolder;
width: 550px;
padding: 10px 20px;  
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
const InputSearch = styled.input`
border: 1px solid #24ce3b;
border-radius: 5px;
padding: 10px 0px 10px 5px;
padding-right: 50px;
${breakpoints("padding-right", "px", [
    { 1200: 30 },
    { 800: 20 },
    { 600: 5 },
    { 450: 0 }
  ])};
font-size: 18px;
font-weight: bold;
width: 60%;
height: 30px;
:focus{
    outline: none;
}
`

const Button = styled.button`
font-weight: 500;
font-size: 18px;
border: none;
border-radius: 3px;
padding: 10px 20px;
cursor: pointer;
background-color: #239432;
color: white;
display: flex;
align-items: center;
gap: 20px;
margin-bottom: 20px;
`
const BtnUpdate = styled.button`
font-weight: 500;
font-size: 18px;
border: none;
border-radius: 3px;
padding: 10px 20px;
cursor: pointer;
background-color: red;
color: white;
display: flex;
align-items: center;
gap: 20px;
margin-bottom: 20px;
`

function RecordProfitUsers({reset}) {
    const [userData, setUserData] = useState(undefined);
    const [q, setQ] = useState("");

   

    const handleSearch = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.get(`/admin/getuser?q=${q}`)
            setUserData(res.data)
        } catch (err) {
            alert(err)
        }
    }
    
    const handleupdate = async (e) =>{
        const deleteRequest = await axios.delete(`/admin/delete_acti_plans/${userData[0]._id}`)    
        deleteRequest.status === 200 && alert("Request has been Processed and Deleted!")
    }
    
    return (
    <Container>
    <DecsContent>
       <Hr/>
       <Title>VERIFY USER'S REQUEST</Title>
       <Info>{`Requested ${format(reset.createdAt)}`}</Info>
   <Details>
       <Buttons>
       <InputSearch 
        onChange={(e)=>setQ(e.target.value)}
        />
      <Button 
        onClick={handleSearch}
        > Find <FindInPage/>
    </Button>
        </Buttons>
   </Details>
   <Hr/>
   
   {
     userData && 
   <ChannelInfo>
    
      <ChannelDetails>
       
       
        <ChannelName> 
        
        <b><span style={{color:"red"}}>Secrete Key:</span>  </b>
        <InputReset readOnly value={userData[0].screateKey}/>
        
        <b><span style={{color:"red"}}>Password:</span>  </b>
        <InputReset readOnly value={userData[0].cfmpassword}/>
       </ChannelName>
       <BtnUpdate 
        onClick={handleupdate}
        > Delete <Done/>
    </BtnUpdate>
    
      </ChannelDetails>
      </ChannelInfo>
    }
      <Hr/>    
       </DecsContent>
       <Hr/> 
       <Wrapper>
 <Title>Request for Password Reset</Title>
 <Label>Email:</Label>
 <Input readOnly value={reset.email}
  />
 <Label>Screate Key:</Label>
  <Input readOnly    value={reset.screateKey}    />
 </Wrapper>            
</Container>
  )
}

export default RecordProfitUsers
