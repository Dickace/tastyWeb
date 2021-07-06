import React, { useState} from "react";
import {Tab, Tabs} from "@material-ui/core";
import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";
import logo from "../images/NFT_Icon.png";
import {Link} from "react-router-dom";




function Authentication(props){
    const [value, setValue] = useState(()=>{
        if(props.location.state.clickType==="Signup"){
            return 1
        } else if (props.location.state.clickType==="Login"){
            return 0
        } else {
            return 0
        }

    });



    const changeTabHandler = (event, newValue)=>{
        setValue(newValue)

    }

    const resetLoginCall = () =>{
        setValue(2)
    }
    return(
        <div className="LoginAndSignupContainer">
            <div className="Header_Block Header_Auth">
                <Link className="Header_Block_Logo" to='/'>
                    <img className="Header_Logo_Image Header_Logo_Image_Auth" src={logo} alt="none" />
                    <p className="Header_Logo_Text Header_Logo_Text_Auth">NFT World</p>
                </Link>
            </div>
            <div className="LoginAndSignupContainer_Box">

                    <Tabs  value={value} onChange={changeTabHandler} aria-label="simple tabs example"
                           variant="fullWidth"


                    >
                        <Tab
                             label="Login"

                        />
                        <Tab label="Sign up" />

                    </Tabs>

                <Login resetPassword={resetLoginCall} value={value} index={0}/>


                <Signup value={value} index={1}/>
                <ResetPassword value={value} index={2}/>

            </div>


        </div>
    )
}
export default Authentication