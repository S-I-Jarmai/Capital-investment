import { async } from '@firebase/util'
import { CancelOutlined, Send } from '@mui/icons-material'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { breakpoints } from '../components/utils/breakPoints'
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import app, { auth, db } from '../firebase'
import axios from 'axios'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import {addDoc, collection, doc, serverTimestamp, setDoc, Timestamp} from "firebase/firestore"



const Container = styled.div`
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
const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px 40px;
color: white;

 
`
const Title = styled.h1`
font-size: 24px;
margin-top: 30px;
color: whitesmoke;
text-decoration: underline;

`
const SubTitle = styled.h4`
text-align: left;

color: whitesmoke;
`
const Input = styled.input`
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
color: white;
:focus{
    outline: none;
}
`
const BtnRest = styled.button`
font-weight: 500;
border: none;
border-radius: 3px;
padding: 10px 20px;
cursor: pointer;
background-color: #df2121;
color: white;
display: flex;
align-items: center;
gap: 20px;
margin-bottom: 20px;
`

const Button = styled.button`
font-weight: 500;
border: none;
border-radius: 3px;
padding: 10px 20px;
cursor: pointer;
background-color: #24ce3b;
color: white;
display: flex;
align-items: center;
gap: 20px;
margin-bottom: 20px;
`

const Links = styled.div`
display: flex;
align-items: center;
gap: 30px;
margin-left: 45px;
`
const TopCointainer = styled.div`
    background-color: #360336;
    height: 100vh;
    ${breakpoints("height", "%", [
    { 600: 100 },
    { 450: 100 }
  ])};
    display: flex;
    flex-direction: column;
    align-items: center;    
`
const BtnContainer = styled.div`
    display: flex;
    gap: 50px;
    
    align-items: center; 
`


function Register() {
  const [inputs, setInputs] = useState({});
  const [img, setImg] = useState(undefined)
  const [imgPerc, setImgPerc] = useState(0)
  const navigate = useNavigate();
  const [err, setErr] = useState(false)

  const handleChange = (e)=>{
    setInputs((prev)=>{
      return {...prev, [e.target.name] : e.target.value}
    })
  }

  const uploadFile = (file, urlType) =>{
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) =>{
        const progress = 
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImgPerc(Math.round(progress));
          switch (snapshot.state){
            case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
          }
      },
      (error)=>{}, () =>{
         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
            setInputs((prev)=>{
              return {...prev, [urlType]: downloadURL};
            })
         })
      }
    );
  };

  useEffect(()=> {
    img && uploadFile(img, "imgUrl")
  }, [img]);
  
  const {email, password} = inputs;
  const availablebalance = 0;
  const referralsbonus = 0;
  const userdailyprofit = 0;
  const activatedPlan = "null"
  const isAdmin = false;
  const widrawalstatus = "null";
 
  const handleUpload = async (e) =>{
    e.preventDefault();
    
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const userId = res.user.uid;
      await setDoc(doc(db, "user", res.user.uid),{
        ...inputs,
        activatedPlan,
        availablebalance,
        referralsbonus,
        userdailyprofit,
        isAdmin,
        widrawalstatus,
        userId,
        timeStamp: serverTimestamp()
      })
      navigate('/')


    } catch (error) {
        setErr(error)
    }
   
    
    //  try {
  //   const {cfmpassword, password, email, cfmemail} = inputs;
  //   if(email === cfmemail){
  //      if(password === cfmpassword){
  //         try {
  //             const res = await axios.post("/auth/signup", {...inputs});
  //             res.status === 200 && navigate('/')
  //         } catch (err) {
            
  //         }

  //      }else{
  //       alert("Password did not Macth");
  //      }

  //   }else{
  //     alert("Email did not match");
  //   }
  //  } catch (err) {
  //     alert("Somethin went wrong!")
  //  } 
  }

  

  return (
    <Box>
    <TopCointainer>
    <Title>Create An Account</Title>
    <Container>
    <Wrapper>
        <Input placeholder='Refferer Username'
        name='referredby'
        onChange={handleChange}
        />
        <SubTitle>Personal Details</SubTitle>
        <Input placeholder='First Name'
        name='firstname'
        onChange={handleChange}
        />
        <Input placeholder='Last Name'
        name='lastname'
        onChange={handleChange}
        />
        <Input placeholder='Username'
        name='username'
        onChange={handleChange}
        />
        <Input placeholder='Phone Number'
        name='phonenumber'
        onChange={handleChange}/>
        <SubTitle>Passport</SubTitle>
        {imgPerc > 0 ? ("Uploading "+imgPerc +"%"): (
            <InputFile type='file' accept='image/*'
            onChange={(e)=>setImg(e.target.files[0])}/>
        )}
        
    </Wrapper>
    <Wrapper>
        <SubTitle>Login Details</SubTitle>         
        <Input placeholder='Email'
        name='email'
        type='email'
        onChange={handleChange}
        />
         <Input placeholder='Confirm Email'
        name='cfmemail'
        type='email'
        onChange={handleChange}
        />
        <Input placeholder='Password'
        name='password'
        type='password'
        onChange={handleChange}
        />
        <Input placeholder='Confirm Password'
        name='cfmpassword'
        type='password'
        onChange={handleChange}/>
        <Input placeholder='Secrete Key'
        name='screateKey'
        onChange={handleChange}/>
    </Wrapper>
    <Wrapper>
        <SubTitle>Bank Details</SubTitle>
        <Input placeholder='Account Name'
        name='accname'
        onChange={handleChange}
        />
        <Input placeholder='Account Number'
        name='accnumber'
        onChange={handleChange}
        />
        <Input placeholder='Bank Name'
        name='bankname'
        onChange={handleChange}/>      
    </Wrapper>
   </Container>
   <BtnContainer>
 
   
   <Button 
   onClick={handleUpload}
   >
     Register
    <Send/>
    </Button>
    {err && <span>Something went wrong!</span>}
   </BtnContainer>
  
    
    </TopCointainer>
    </Box>
  )
}

export default Register
