import React from "react";
import logo from '../images/NFT_Icon.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faInstagram, faDiscord, faReddit} from "@fortawesome/free-brands-svg-icons";
import {Link, withRouter} from "react-router-dom";

function FooterBody(){
    return (
        <div className="Footer">
            <div className="Footer_Container">
                <Link to={'/'}>
                    <img className="Footer_logo" src={logo} alt={"none"}/>
                </Link>
                <div className="Footer_Container_Text">
                    <p>
                        Copyright © 2021 NFT World. All rights reserved.
                    </p>
                    <Link to={'/terms'}>
                         Terms
                    </Link>
                    <span className="Divider Divider_Footer"/>
                    <Link to={'/privacy'}>Privacy Policy </Link>
                </div>
                <div className="Footer_Container_Links">
                    <div className="Footer_Container_TextLinks">

                        <Link to={'/aboutus'}>Contact Us</Link>
                    </div>

                    <div className="Footer_Container_Social">
                        <a href="https://twitter.com" className="Footer_Container_SocialIcon Footer_Container_SocialIcon_Twitter">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href="https://www.instagram.com/" className="Footer_Container_SocialIcon Footer_Container_SocialIcon_Instagram" >
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href="https://discord.com" className="Footer_Container_SocialIcon Footer_Container_SocialIcon_Discord" >
                            <FontAwesomeIcon icon={faDiscord}/>
                        </a>
                        <a href="https://www.reddit.com" className="Footer_Container_SocialIcon Footer_Container_SocialIcon_Reddit" >
                            <FontAwesomeIcon icon={faReddit}/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default withRouter(FooterBody)