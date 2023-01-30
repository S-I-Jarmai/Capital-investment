import { async } from '@firebase/util'
import axios from 'axios'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../../../context/AuthContect'
import { db } from '../../../firebase'

const Container = styled.div`
       display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 600px;
    height: 600px;
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
margin-top: 10px;
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
const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: 1px solid ${({theme})=> theme.soft};
color: ${({theme})=> theme.textSoft};
`
const Label = styled.label`
font-size: 20px;
`


function AddBankDetails() {
 // const {currentUser} = useSelector((state)=>state.user)
 const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) =>{
    setInputs((prev)=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  //const userId = currentUser._id
  const handleUpload = async (e) =>{
    e.preventDefault();
    console.log(inputs);
    try {
      await addDoc(collection(db, "bankdetails"),{
        ...inputs,
        timeStamp: serverTimestamp()   
      })
      alert("Bank Details have successfully uploaded!")
    } catch (error) {
      alert(error)
    }
  //  const res = await axios.post("/bankdetails", {...inputs, userId});
  //  res.status === 200 && navigate(`/admin/${userId}`) 
  }
  return (
    <Container>
      <Wrapper>
        
        <Title>Add Bank Details</Title>
        <Input type='number' placeholder='Account Number'
        name ='accnum'
        onChange={handleChange}
        />
         <Input type='text' placeholder='Account Name'
        name ='accname'
        onChange={handleChange}/>
         <Input type='text' placeholder='Bank Name'
        name ='bankname'
        onChange={handleChange}/>

        <Button
        onClick={handleUpload}
        >Upload</Button>
      </Wrapper>
    </Container>

  )
}

export default AddBankDetails
