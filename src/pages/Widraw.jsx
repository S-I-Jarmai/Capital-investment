import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import silver from '../images/silver.jpg'
import { breakpoints } from '../components/utils/breakPoints'
import { async } from '@firebase/util'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message/Message'
import { AuthContext } from '../context/AuthContect'
import { collection, where, doc, getDocs, query, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import WidrawResistric from './WidrawResistric'


const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #360336;
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
flex-direction: row;
${breakpoints("flex-direction", "", [
{ 1200: "row" },
{ 800: "row" },
{ 600: "row" },
{ 450: "column" }
])};
justify-content: center;
align-items: center;

`
const BtnBuy = styled.button`
align-self: center;
height: 30px;
width: 50%;
align-self: center;
margin-bottom: 10px;
border-radius: 10px;
border: none;
background-color: #24ce3b;
color: white;
font-size: 14px;
font-weight: bold;
cursor: pointer;
text-align: center;
margin-top: 10px;
`
const Btn = styled.button`
align-self: center;
height: 30px;
width: 50%;
align-self: center;
margin-bottom: 10px;
border-radius: 10px;
border: none;
background-color: red;
color: white;
font-size: 14px;
font-weight: bold;
cursor: pointer;
text-align: center;
margin-top: 10px;
`
const FeaturedImg = styled.img`
width: 60%;

margin-top: 20px;
margin-bottom: 40px;
object-fit: fill;
height: 250px;
${breakpoints("height", "px", [
{ 1200: "250" },
{ 800: "250" },
{ 600: "250" },
{ 450: "150" }
])};

`
const CutCard = styled.div`
 display: flex;
${breakpoints("display", "", [
{ 1200: "none" },
{ 800: "none" },
{ 600: "flex" },
{ 450: "flex" }
])};
flex-direction: column;
`
const CardContainer = styled.div`

width: 300px;
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
align-self: center;

margin-top: 30px;
/* box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); */
`
const CardWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
const Des = styled.div`

`
const Figures = styled.div`

`
const Texts = styled.h3`
font-size: 50px;
${breakpoints("font-size", "px", [
{ 1200: "50" },
{ 800: "10" },
{ 600: "20" },
{ 450: "16" }
])};
font-weight: 800;
color: red;
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
const TextSubs = styled.h6`
 

margin-bottom: 10px;
align-self: center;

`

//GOS HERE
const InputContainer = styled.div`
display: flex;
flex-direction: row;
${breakpoints("flex-direction", "", [
{ 1200: "row" },
{ 800: "row" },
{ 600: "column" },
{ 450: "column" }
])};
width: 100%;
color: ${({theme})=>theme.text};


`
const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px 40px;



`
const Title = styled.h1`
font-size: 20px;
margin-top: 30px;
color: whitesmoke;
align-self: center;
margin-bottom: 10px;

`
const SubTitle = styled.h5`
text-align: left;
color: white;

`
const Input = styled.input`
border: 1px solid #24ce3b;
background-color: white;
border-radius: 5px;
padding: 10px 0px 10px 5px;
padding-right: 50px;
${breakpoints("padding-right", "px", [
{ 1200: 30 },
{ 800: 20 },
{ 600: 5 },
{ 450: 0 }
])};
width: 100%;
:focus{
outline: none;
}

`
const InputFile = styled.input`
border: 1px solid #24ce3b;
background-color: white;
border-radius: 5px;
padding: 10px 0px 10px 5px;
padding-right: 50px;
${breakpoints("padding-right", "px", [
 { 1200: 30 },
 { 800: 20 },
 { 600: 5 },
 { 450: 0 }
])};

width: 100%;
color: black;
:focus{
 outline: none;
}
`
const Paragraph = styled.p`
    color: whitesmoke;
    font-weight: 400;
  font-size: 12px;
`

const Widraw = () => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false)
  //const {currentUser} = useSelector((state)=>state.user);
  const {currentUser} = useContext(AuthContext)
  const {email} = currentUser
  
  const [amount, setWidrawAmount] = useState(0);
  
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
 
  useEffect(()=>{
    const fetchUSer = async ()=>{
      const q = query(collection(db, "user"),
      where("email", "==", email)
      );
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>{
          setUserInfo(doc.data())
        })
      } catch (error) {
        alert(error)
      }    
    }
    fetchUSer();
  },[email])
  
  const {
        firstname,
        lastname,
        accnumber,
        accname,
        bankname,
        imgUrl,
        availablebalance,
        phonenumber,
        widrawalstatus,
        userId
      } = userInfo;
        
  const handleWidraw = async (e) =>{
    e.preventDefault();
          if(amount>availablebalance){
            alert("Insuficient Balance!")
          }else{
            try {
              await addDoc(collection(db, "reqWidraw"),{
                accnumber,
                accname,
                bankname,
                availablebalance,
                phonenumber,
                widrawalstatus,
                amount,
                userId,
                timeStamp: serverTimestamp()
              })
             handleOpen()
                
            } catch (err) {
              alert(err)
            }
          }
     }
  
        
  // const handleWidraw = async (e) =>{
  //   e.preventDefault();
  //         if(amount>availablebalance){
  //           alert("Insuficient Balance!")
  //         }else{
  //           try {
  //             const res = await axios.post(`/users/widraw/${userId}`, {amount, userId
  //               ,accnumber,
  //               accname,
  //               bankname,
  //               totalamount,
  //               availablebalance,
  //               img,
  //               email,
  //               phonenumber,
  //               widrawalstatus})
  //               res.status === 200 && handleOpen()
                
  //           } catch (err) {
  //             alert(err)
  //           }
  //         }
  //    }
  
  const message = {
    title: 'Widrawal Nofication',
    body: 'Your request has been received, 20% charges will be deducted and then process within 24Hours'
  }
 
  
  const ErrorWrapper = styled.div`
   display: flex;
flex-direction: row;
${breakpoints("flex-direction", "", [
{ 1200: "row" },
{ 800: "row" },
{ 600: "row" },
{ 450: "column" }
])};
justify-content: center;
align-items: center; 
  `
  console.log(widrawalstatus);
  return (
    <Container>
      {
        widrawalstatus === "Pending" ?
        (
          <ErrorWrapper>
              <Title>Request Denied!</Title>
              <SubTitle>{`${firstname} ${lastname} you have a pending widrawal`}</SubTitle>
          </ErrorWrapper>
          ) 
          :
       (
       <Wrapper>
      <CutCard>
       <CardContainer>
        <CardWrapper> 
          <FeaturedImg src={userInfo.imgUrl}/>
        </CardWrapper>
        
    </CardContainer>
    </CutCard>
    <InputContainer> 
    <InputWrapper>
    <Title>WIDRAW</Title>
        {/* <SubTitle>TOTAL AMOUNT</SubTitle>
        <Input readOnly value={currentUser.totalamount + currentUser.referralsbonus} /> */}
        <SubTitle>AVAILABLE BALANCE</SubTitle>
        <Input readOnly value={userInfo.availablebalance}/>
        <SubTitle>AMOUNT</SubTitle>
        <Input type='number' placeholder='Enter Amount to Widraw'
        name='amount'
        onChange={(e)=>setWidrawAmount(e.target.value)}
        />
      {
      amount > 999 &&
      (<BtnBuy onClick={handleWidraw}>Widraw</BtnBuy>)}
    <Paragraph>Minimum widrawal 1000</Paragraph>
    <Paragraph>Widrawal charges 20%</Paragraph>
    

    </InputWrapper>
    </InputContainer>
    <Message message={message} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} open={open}/>
       </Wrapper>
       )
      
      
      }
     </Container>
  )
}

export default Widraw
