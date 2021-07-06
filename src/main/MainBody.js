import React from "react";
import Guide from "./GuideContainer";
import PopularNFT from "./PopularNFT";
import Describe from "./Describe";
import {withRouter} from "react-router-dom";
import ScrollToTop from "../AdditionalComponents/ScrollToTop";


function MainBody(){
    return(
            <div className="MainContainer">
                <ScrollToTop/>
                <Describe/>
                <Guide/>
                <PopularNFT/>
            </div>

    );


}
export default withRouter(MainBody)