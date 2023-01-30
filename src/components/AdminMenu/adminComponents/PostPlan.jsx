import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom"
import {useSelector} from 'react-redux'
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import app, { db } from '../../../firebase'
import {addDoc, collection, doc, serverTimestamp, setDoc} from "firebase/firestore"
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
function PostPlan() {
    const {currentUser} = useSelector((state)=>state.user)

    const [img, setImg] = useState(undefined)
    const [imgPerc, setImgPerc] = useState(0)
    const [inputs, setInputs] = useState({})

    const navigate = useNavigate()

    const handleChange = (e) =>{
      setInputs((prev)=>{
        return {...prev, [e.target.name]: e.target.value}
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
    }, [img])
    
    const handleUpload = async (e) =>{
      try {
        await addDoc(collection(db, "plans"),{
          ...inputs,
          timeStamp: serverTimestamp()
        })
        alert("Plan have successfully uploaded!")
      } catch (error) {
        
      } 
      // const res = await axios.post("/plans", {...inputs, userId});
      // res.status === 200 && alert("Plan has successfully uploaded!")
    
    }
  return (
    <Container>
      <Wrapper>
        <Title>Upload a New Plan</Title>
        <Input type='text' placeholder='Name'
        name ='name'
        onChange={handleChange}
        />
         <Input type='number' placeholder='Amount'
        name='amount'
        onChange={handleChange}
         />
         <Input type='number' placeholder='Hourly Profit'
        name ='hour'
        onChange={handleChange}
        />
         <Input type='number' placeholder='Daily Profit'
        name ='daily'
        onChange={handleChange}
        />
         <Input type='number' placeholder='Cycle Days'
        name ='cycle'
        onChange={handleChange}
        />
         <Input type='number' placeholder='Total Profit'
        name ='totalprofit'
        onChange={handleChange}
        />
        <Label>Image:</Label>

       {imgPerc > 0 ? ("Uploading "+imgPerc +"%") :( <Input type='file' accept='image/*'
        onChange={(e)=>setImg(e.target.files[0])}
        />)}
        <Button
        onClick={handleUpload}
        >Upload</Button>
      </Wrapper>
    </Container>
  )
}

export default PostPlan
