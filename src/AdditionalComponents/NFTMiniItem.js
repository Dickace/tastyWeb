import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import NFTItem from "../marketplace/NFTItem";

function NFTMiniItem(props){

    const [clickable,] = useState(()=>{
        return window.location.pathname !== "/";
    })

    const [itemState, setItemState] = useState(false)

    const handleOpenNFTItem = () =>{
        if (itemState===true) {setItemState(false)} else { setItemState(true)}

    }

    const NFTminiitem = () => {
        return(
            <div>
                <div style={{
                    backgroundImage: "url("+ props.Value.previewUrl+")"
                }} className="NFTMiniItem_Image"/>
                <div className="NFTMiniItem_Text">
                    <p className="NFTMiniItem_Text_Title" >{props.Value.title} </p>
                    <p className="NFTMiniItem_Text_Author">by <a href={props.Value.authorUrl}> {props.Value.authorName} <FontAwesomeIcon icon={faExternalLinkAlt}/></a></p>
                    <p className="NFTMiniItem_Text_Price">Price: <span className="NFTMiniItem_Text_Price_Value">
                     {props.Value.price + "$"}
                </span></p>
                    <p className="NFTMiniItem_Text_Count">{props.Value.counts} for Sale</p>

                </div>
            </div>
        )
    }

    return(
        <div className="NFTMiniItem">
            {clickable? <div onClick={handleOpenNFTItem}><NFTminiitem /></div>: <NFTminiitem/>}
            {itemState? <div onClick={()=>setItemState(false)} className="NFTItemBackground"> <NFTItem value={props.Value}/></div> :<div/>}
        </div>






    )


}
export default NFTMiniItem