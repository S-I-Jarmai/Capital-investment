import React from "react";
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import FeedIcon from '@mui/icons-material/Feed';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LocalLibrary from "@mui/icons-material/LocalLibrary";
import LibraryMusic from "@mui/icons-material/LibraryMusic";
import SportsKabaddi from "@mui/icons-material/SportsKabaddi";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import { SliderMarkLabel } from "@mui/material";
import { CleanHands, Clear, ClearAllOutlined, DocumentScannerTwoTone, MonetizationOn, Money, Update } from "@mui/icons-material";

const Container = styled.div`
  flex : 1;
  color: white;
  background-color: #410941;
  height: 100vh;
  position: sticky;
  top: 0;
`
const Wrapper = styled.div`
    padding: 16px 26px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 25px;
`
const Img = styled.img`
    height: 20px;
`
const Items = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 5px 0px;
    cursor: pointer;
    margin-top: 20px;
    &:hover{
        background-color: white;
        color: black;
    }
`
const ItemsTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 5px 30px;
    cursor: pointer;
    
    font-weight: bolder;
    font-size: 16px;
    background-color: white;
    color: black;
`
const Hr = styled.hr`
margin: 5px 0px;
border: 0.5px solid white;
`

const Button = styled.button`
   padding: 5px 15px;
   margin-top: 5px;
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
const Login = styled.div`

`
function Menu({darkMode, setdarkMode}){
    
    return(
       <Container>
        <Wrapper>
            <ItemsTitle>
                USER AID
            </ItemsTitle>
            
            <Hr/>   
        <Link to="/admin/find" style={{color:"white", textDecoration:"none"}}>  
        <Items>
            <SearchOutlined/>
            Find User 
        </Items>
        </Link>
        <Hr/>  
        <Link to="/admin/activate" style={{color:"white", textDecoration:"none"}}>          
        <Items>
            <ShoppingCartIcon/>
            Purchased Request
        </Items>
        </Link>
        <Hr/>     
        <Link to="/admin/widraw" style={{color:"white", textDecoration:"none"}}>  
        <Items>
            <RequestQuoteIcon/>
            Widrawal Request
        </Items>
        </Link>
        <Hr/> 
        <Link to="/admin/recordplans" style={{color:"white", textDecoration:"none"}}>
        <Items>
        <LocalLibraryIcon/>
        Activated Plan
        </Items>
        </Link>  
        <Hr/>  
        <Link to="/admin/recordwidraws" style={{color:"white", textDecoration:"none"}}> 
        <Items>
        <ReportIcon/>
        Processed Widrawal     
        </Items>      
        </Link>
        <Hr/>     
        <ItemsTitle>
            UPDATES 
        </ItemsTitle>
        <Hr/> 
        <Link to="/admin/profit" style={{color:"white", textDecoration:"none"}}>
        <Items>
            <MonetizationOn/>
            User Profit
        </Items>
        </Link>
        
        <Hr/> 
        <Link to="/admin/postplan" style={{color:"white", textDecoration:"none"}}>
        <Items>
        <FeedIcon/>
             Add New Plan
        </Items>
        </Link>
        <Hr/>     
        <Link to="/admin/bankdetails" style={{color:"white", textDecoration:"none"}}>    
        <Items>
        <AccountBalanceIcon/>
        Bank Details
        </Items>
        </Link>
        <Hr/> 
        <Link to="/admin/resetrecord" style={{color:"white", textDecoration:"none"}}>
        <Items>
            <DocumentScannerTwoTone/>
            Reset  Record
        </Items>
        </Link>
        <Hr/>  
        <Link to='/admin/reset' style={{color:"white", textDecoration:"none"}}>
        <Items>
            <CleanHands/>
            Reset Password
            </Items>      
        </Link>   
        </Wrapper>
       </Container>
    )
}
export default Menu