import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faInstagram, faReddit, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-elastic-carousel";

function AboutUs(){

    const [employees, ] = useState([
        {name:"Lorem ipsum", job:"Lorem ipsum",avatarURL:"https://i.pravatar.cc/300"},
        {name:"Lorem ipsum", job:"Lorem ipsum",avatarURL:"https://i.pravatar.cc/300"},
        {name:"Lorem ipsum", job:"Lorem ipsum",avatarURL:"https://i.pravatar.cc/300"},
        {name:"Lorem ipsum", job:"Lorem ipsum",avatarURL:"https://i.pravatar.cc/300"},
        {name:"Lorem ipsum", job:"Lorem ipsum",avatarURL:"https://i.pravatar.cc/300"},
        {name:"Lorem ipsum", job:"Lorem ipsum",avatarURL:"https://i.pravatar.cc/300"},
    ])

    return(
        <div className="AboutUs_Container">
            <div className="AboutUs_Mission">
                <p className="AboutUs_Text AboutUs_Text_Left">About our marketplace and mission </p>
                <p className="AboutUs_Text AboutUs_Text_Right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Vitae ultricies leo integer malesuada nunc vel. Consequat nisl vel pretium lectus quam id. Vestibulum lorem sed risus ultricies tristique. Aliquet bibendum enim facilisis gravida. Etiam dignissim diam quis enim. Diam quam nulla porttitor massa. Cursus euismod quis viverra nibh cras. Arcu bibendum at varius vel pharetra vel turpis nunc. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.</p>

            </div>
            <div className="AboutUs_Team">
                <p  className="AboutUs_Team_Title">Our team</p>
                <p className="AboutUs_Team_Text">The smartest people work every day to provide the best service and make our clients happy</p>
                <div className="PopularNFT_Container_Carousel">
                    <Carousel
                        isRTL={false}
                        breakPoints={[
                            {width:200, itemsToShow:1},
                            {width:300, itemsToShow:2},
                            {width:500, itemsToShow:3},
                            {width: 700, itemsToShow: 4},
                            {width: 1050, itemsToShow: 5},
                            {width: 1350, itemsToShow: 6},
                            {width: 1700, itemsToShow: 7},

                        ]}
                        itemPadding={[10, 10]}>
                        {employees.map((value, index) => {
                            return(
                                <div key={index}>
                                    <img className="AboutUs_Team_Avatar" src={value.avatarURL} alt="none"/>
                                    <p className="AboutUs_Team_Name">{value.name}</p>
                                    <p className="AboutUs_Team_Job">{value.job}</p>
                                </div>
                            )
                        })}

                    </Carousel>
                </div>
            </div>
            <div className="AboutUs_ContactUs">
                <p className="AboutUs_ContactUs_Text AboutUs_ContactUs_Title">Contact us</p>
                <p className="AboutUs_ContactUs_Text AboutUs_ContactUs_Phone">+7-800-555-35-35</p>
                <p className="AboutUs_ContactUs_Text AboutUs_ContactUs_Email">mail@domen.ru</p>
                <p className="AboutUs_ContactUs_Text AboutUs_ContactUs_Address">Address</p>


            <div className="Footer_Container_Social AboutUs_ContactUs_Social">
                <a href="https://twitter.com" className="Footer_Container_SocialIcon Footer_Container_SocialIcon_Twitter AboutUs_ContactUs_SocialIcon">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="https://www.instagram.com/" className="Footer_Container_SocialIcon Footer_Container_SocialIcon_Instagram AboutUs_ContactUs_SocialIcon" >
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="https://discord.com" className="Footer_Container_SocialIcon Footer_Container_SocialIcon_Discord AboutUs_ContactUs_SocialIcon" >
                    <FontAwesomeIcon icon={faDiscord}/>
                </a>
                <a href="https://www.reddit.com" className="Footer_Container_SocialIcon Footer_Container_SocialIcon_Reddit AboutUs_ContactUs_SocialIcon" >
                    <FontAwesomeIcon icon={faReddit}/>
                </a>
            </div>
            </div>
        </div>
    )
}
export default AboutUs