import React from "react";
import Step1 from '../images/Step1.png'
import Step2 from '../images/Step2.png'
import Step3 from '../images/Step3.png'

function Guide(){
    return(
        <div className="GuideContainer">
            <div className="GuideContainer_Title">
                <span> How it Work?</span>
            </div>
            <div className="GuideContainer_Guide">
                <div className="GuideContainer_GuideStep">
                    <img className="GuideContainer_GuideStep_StepImage" src={Step1} alt="none"/>
                    <p className="GuideContainer_GuideStep_StepText">
                        Fill Out the Early Access Form
                    </p>
                </div>
                <div className="GuideContainer_GuideStep">
                    <img className="GuideContainer_GuideStep_StepImage" src={Step2} alt="none"/>
                    <p className="GuideContainer_GuideStep_StepText">
                        Collect Moments
                    </p>
                </div>
                <div className="GuideContainer_GuideStep">
                    <img className="GuideContainer_GuideStep_StepImage" src={Step3} alt="none"/>
                    <p className="GuideContainer_GuideStep_StepText">
                        Trade Moments
                    </p>
                </div>
            </div>

        </div>
    );
}
export default Guide