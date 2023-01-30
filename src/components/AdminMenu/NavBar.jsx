import React from "react";
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
import { useState } from "react";
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';


const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: #410941;
    height: 30px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0px 20px ;
    height: 100%;
    position: relative;
    color: white;
`
const Search = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #aaaaaa;
    border-radius: 3px;
    padding: 5px;
    
`
const Input = styled.input`
    border: none;
    background-color: transparent;
    padding-right: 70%;
    outline: none;
    color: ${({theme})=>theme.text};
    font-size: 16px;
`
const Button = styled.button`
   padding: 5px 15px;
   background-color: transparent;
   border: 1px solid #3ea6ff;
   border-radius: 3px;
   color: #3ea6ff;
   font-weight: 500px;
   text-align: center;
   display: flex;
   gap: 5px;
   cursor: pointer;
`
const User = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 500;
    margin-left: 50px;
    color: ${({theme})=>theme.text};
`
const Avatar = styled.img`
    height: 30px;
    width: 30px;
    background-color: #999;
    border-radius: 50px;
`

function NavBar(){
    
    return(
        <>
        <Container>
            <Wrapper>
            <LogoutIcon/>
                <User>
                    <Avatar src="{currentUser.img}"/>
                    {/* {currentUser.name} */}
                </User>
                
                
            </Wrapper>
        </Container>
        
        </>
    )
}
export default NavBar