import { BrowserRouter, Routes,Route } from "react-router-dom";
import RegisterForm from "./pages/register/registercomponent";
import LoginForm from "./pages/login/login";
import Home from "./pages/home/home";
import ForgotPassword from "./pages/Password/forgetPassword";
import ResetPassword from "./pages/Password/resetpassword";


const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<RegisterForm/>}/>
                <Route path='/' element={<LoginForm/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/forget-password' element={<ForgotPassword/>}/>
                <Route path='/reset-password' element={<ResetPassword/>}/>
            </Routes>
        </BrowserRouter>    )
}

export default AppRoutes;