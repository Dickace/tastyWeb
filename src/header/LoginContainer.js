import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AuthService from "../services/auth.service"

function LoginContainer(){

    const [currentUser, setCurrentUser] = useState(undefined)

    const logout = () =>{
        AuthService.logout()
        window.location.reload()
    }

    useEffect(()=>{
        const user = AuthService.getCurrentUser()
        if (user){
            setCurrentUser(user)

        }
    },[])

    return(
        <div  >
            {currentUser ? (
                <div className="AccountContainer">
                    <Link className="Header_Button Header_Button_LoginAndSignup" to="/terms">
                        My account
                        </Link>
                    <button className="Header_Button Header_Button_LoginAndSignup" onClick={logout}>Logout</button>
                </div>
            ):(
                <div className="AccountContainer">
                    <Link to={{
                        pathname: "/login",
                        state:{clickType: "Signup"}
                    }}  className="Header_Button Header_Button_LoginAndSignup">Sign up</Link>
                    <Link to={{
                        pathname: "/login",
                        state:{clickType: "Login"}
                    }} className="Header_Button Header_Button_LoginAndSignup">Login</Link>
                </div>
                )}

        </div>
    );
}
export default LoginContainer