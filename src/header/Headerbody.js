import React from "react";
import logo from '../images/NFT_Icon.png'
import LoginContainer from "./LoginContainer";
import SearchBar from "./SearchBar";

import {Link, withRouter} from "react-router-dom";

function HeaderBody(){
    return (
<div>


                <div className="Header" >

                        <div className="Header_Block">
                            <Link className="Header_Block_Logo" to='/'>
                            <img className="Header_Logo_Image" src={logo} alt="none" />
                            <p className="Header_Logo_Text">NFT World</p>
                            </Link>
                            <SearchBar/>
                        </div>


                    <div className="Header_RightSection">

                        <Link to={'/marketplace'} className="Header_Button Header_Button_Marketplace">Marketplace</Link>
                        <Link to={'/aboutus'} className="Header_Button Header_Button_About">About Us</Link>
                        <span className="Divider Divider_Header"/>
                        <LoginContainer/>
                    </div>

                </div>
    <div className="Header_Margin"/>
</div>





    );
}
export default withRouter(HeaderBody)