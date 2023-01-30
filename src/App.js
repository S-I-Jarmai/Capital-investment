import Login from "./pages/Login";
import Register from "./pages/Register";
import Taps from "./pages/Taps";
import styled from "styled-components";
import { breakpoints } from "./components/utils/breakPoints";
import Plans from "./pages/Plans";
import Widraw from "./pages/Widraw";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import AdminPanel from "./pages/AdminPanel";
import AdminPostPlan from "./pages/AdminPostPlan";
import AdminActivatePlan from "./pages/AdminActivatePlan";
import AdminBankDetails from "./pages/AdminBankDetails";
import AdminWidraw from "./pages/AdminWidraw";
import AdminGetUser from "./pages/AdminGetUser";
import RcdActivatePlan from "./pages/RcdActivatePlan";
import RcdProcessedWidraw from "./pages/RcdProcessedWidraw";
import Wallet from "./components/wallet/Wallet";
import ProfitUpdate from "./pages/ProfitUpdate";

import ForgotPassword from "./pages/ForgotPassword";
import RcdResetPassword from "./pages/RcdResetPassword";
import AdminForgotPassword from "./components/AdminMenu/adminComponents/AdminForgotPassword";
import AdminResetUserPword from "./pages/AdminResetUserPword";
import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./context/AuthContect";


const Container = styled.div`
    width: 100%;
    
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
    justify-content: center;
    
`

function App() {
  const {currentUser} = useContext(AuthContext)
  
  const RequireAuth = ({children}) =>{
    return currentUser ? children : <Navigate to="/"/>
  };
  
  return (
    <div >
    <BrowserRouter>
      <Routes>
            <Route path="/">
                <Route index element={<Login/> }/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/resetpassword" element={<ForgotPassword/>}/> 
                <Route path="/plan">
                    <Route path=":id" element={<RequireAuth><Plans/></RequireAuth>}/>
                </Route>
                <Route path="/widraw" element={<RequireAuth><Widraw/></RequireAuth>}/>
                <Route path="/my_wallet" element={<RequireAuth><Wallet/></RequireAuth>}/>
                <Route path="/home" >
                <Route path=":id" element={<RequireAuth><Taps/></RequireAuth>}/>
                </Route>
                <Route path="/admin" >
                <Route path=":id" element={<RequireAuth><AdminPanel/></RequireAuth>}/>
                <Route path="find" element={<RequireAuth><AdminGetUser/></RequireAuth>}/>
                <Route path="profit" element={<RequireAuth><ProfitUpdate/></RequireAuth>}/>
                <Route path="resetrecord" element={<RequireAuth><RcdResetPassword/></RequireAuth>}/>
                <Route path="reset" element={<RequireAuth><AdminResetUserPword/></RequireAuth>}/>
                <Route path="postplan" element={<RequireAuth><AdminPostPlan/></RequireAuth>}/>
                <Route path="activate" element={<RequireAuth><AdminActivatePlan/></RequireAuth>}/>
                <Route path="recordplans" element={<RequireAuth><RcdActivatePlan/></RequireAuth>}/>
                <Route path="recordwidraws" element={<RequireAuth><RcdProcessedWidraw/></RequireAuth>}/>
                <Route path="bankdetails" element={<RequireAuth><AdminBankDetails/></RequireAuth>}/>
                <Route path="widraw" element={<RequireAuth><AdminWidraw/></RequireAuth>}/>


                  </Route>
                 
                  
            </Route>
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
