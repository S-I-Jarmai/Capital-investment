 import React, { useState } from 'react'
 import styled from 'styled-components'
 import Cards from '../components/Card/Cards'
 import silver from '../images/silver.jpg'
 import { breakpoints } from '../components/utils/breakPoints'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {getStorage, ref, uploadBytesResumable, getDownloadURL, list} from "firebase/storage"
import app, { db } from '../firebase'
import Message from '../components/Message/Message'
import {collection, query, where, getDocs, addDoc, serverTimestamp, doc} from "firebase/firestore"
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContect'
import { async } from '@firebase/util'

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
    flex-direction: column;
    justify-content: center;
    
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
const CutCard = styled.div`
     display: none;
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

  /* box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); */
`
const CardWrapper = styled.div`
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
color: white;
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

 const Plans = () => {
    
    //const {currentUser} = useSelector((state)=>state.user)
    const {currentUser} = useContext(AuthContext)
    const path = useLocation().pathname.split("/")[2]
    const navigate = useNavigate();
    

    const [plan, setPlan] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [bank, setBank] = useState([]);
    const [img, setImg] = useState(undefined)
    const [imgPerc, setImgPerc] = useState(0)
    const [inputs, setInputs] = useState({})
    
    
    useEffect(()=>{
      const fetchData = async () =>{
        const q = query(collection(db, "plans"), 
        where("name", "==", path)
        );
        try {
          const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>{
          setPlan(doc.data())
        });        
        } catch (error) {
          alert(error)
        }
      }
      fetchData()
    },[path])
    
    
    // useEffect(()=>{
    //   const fetchData = async ()=>{
    //     try {
    //       const planRes = await axios.get(`/plans/find/${path}`);
    //       const bankRes = await axios.get('/bankdetails/find/bankdetails');
    //       setPlan(planRes.data)
    //       setBank(bankRes.data)
    //     } catch (err) { } 
    //   }
    //   fetchData()
    // },[path])

    
    const uploadFile = (file, urlType) =>{
      const storage = getStorage(app)
      const fileName = new Date().getTime() + file.name
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) =>{
          const progress = 
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setImgPerc(Math.round(progress)); 
            switch(snapshot.state){
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
        (error) =>{}, () =>{
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
            setInputs((prev)=>{
              return {...prev, [urlType]: downloadURL};
            })
          })
        }
      );
    };

    const userId = currentUser.uid
    const userBank = userInfo.bankname;
    const userName = userInfo.accname
    const userPhnumber = userInfo.phonenumber;
    const userEmail = currentUser.email;
    const userImg = userInfo.imgUrl;
    const planName =  plan.name;
    const planAmount = plan.amount;
    const paymentImg = inputs.imgUrl;
    const userdailyprofit = plan.daily
    
  
  
    useEffect(() =>{
      const fetchUser = async () =>{
        const u = query(collection(db, "user"),
        where("email", "==", userEmail)
        );
        try {
          const userSnapShot = await getDocs(u);
      userSnapShot.forEach((doc)=> {
        setUserInfo(doc.data())
      });
        } catch (error) {
      
        }
      }
      fetchUser()
  },[userEmail])
      
    useEffect(()=>{
      img && uploadFile(img, "imgUrl")
    },[img])
   
    const handleUpload = async (e) =>{
      e.preventDefault();
      try {
        await addDoc(collection(db, "reqtobuyplans"),{
          userName, userBank, userPhnumber, userEmail,  
          userdailyprofit, planName, planAmount, paymentImg,
          userId,
          timeStamp: serverTimestamp()
        })
        handleOpen() && navigate(-1)
      } catch (error) {
        console.log(error);
      } 
    }

    // const handleUpload = async (e) =>{
    //   e.preventDefault();
    //   const res = await axios.post(`/users/buy/${userId}`, {userId, userName, userBank, userPhnumber, userEmail, userImg, userdailyprofit, planName, planAmount, paymentImg});
    //   res.status === 200 && handleOpen() && navigate('/')  
      
    // }
    
    useEffect(()=>{
      const fetchBank = async ()=>{
         let list = [];
         try {
          const querySnapshots = await getDocs(collection(db, "bankdetails"));
          querySnapshots.forEach((doc)=>{
            list.push({id: doc.id, ...doc.data()});
          });
          setBank(list)
         } catch (error) {
          
         }
      }
      fetchBank()
    },[])                                                                                                           


    const [change, setChange] = useState("")
      const handleChange = (e) =>{
        setChange((prev)=>{
          return {...prev, [e.target.name]: e.target.value}
        })
      }
      const message = {
        title: 'Plan Activation Nofication',
        body: 'Verifying your request, plan will be activated soon... '
      }
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [open, setOpen] = useState(false)

 
   return (
     <Container>
       <Wrapper>
        <CutCard>
       <Title></Title>
       <CardContainer>
        <CardWrapper> 
          <FeaturedImg src={plan.imgUrl}/>
          <Des>
            <Texts>{plan.name}</Texts>
            <TextSubs>Hourly</TextSubs>
            <TextSubs>Daily Profit</TextSubs>
            <TextSubs>Cycle Days</TextSubs>
            <TextSubs>Total Profit</TextSubs>
          </Des>
          <Figures>
            <Texts>{`N${plan.amount}`}</Texts>
            <TextSubs>{`N${plan.hour}`}</TextSubs>
            <TextSubs>{`5% N${plan.daily}`}</TextSubs>
            <TextSubs>{plan.cycle}</TextSubs>
            <TextSubs>{`N${plan.totalprofit}`}</TextSubs>
          </Figures>
        </CardWrapper>
    </CardContainer>
    </CutCard>
    <InputContainer> 
    <InputWrapper>
    <Title>DEPOSITE</Title>
        <SubTitle>ACCOUNT NUMBER</SubTitle>
        <Input readOnly value={bank[0] && bank[0].accnum} />
        <SubTitle>ACCOUNT NAME</SubTitle>
        <Input readOnly value={bank[0] && bank[0].accname}/>
        <SubTitle>BANK NAME</SubTitle>
        <Input readOnly value={bank[0] && bank[0].bankname}/>
        <SubTitle>AMOUNT</SubTitle>
        <Input readOnly value={ bank[0] && `N ${plan.amount}`}/>
        <SubTitle>UPLOAD EVIDENCE OF PAYMENT</SubTitle>
        
        {imgPerc > 0 ? ("Uploading "+imgPerc +"%") :( <InputFile type='file' accept='image/*'
        onChange={(e)=>setImg(e.target.files[0])}
        />)}

        {imgPerc === 100 &&
          (<BtnBuy
          onClick={handleUpload}>Activate Plan</BtnBuy>)
        }
    </InputWrapper>
    </InputContainer>
       </Wrapper>
       <Message message={message} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} open={open}/>
     </Container>
   )
 }
 
 export default Plans
 