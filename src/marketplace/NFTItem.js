import React from "react";
function NFTItem(props) {
    return(
        <div className="NFTItemContainer" onClick={(event)=>{event.stopPropagation()}}>
            <div className="NFTItem_PreviewContainer">
                <img className="NFTItem_Preview" src={props.value.fullNFT} alt="none"/>
            </div>

            <div className="NFTItem_DataContainer">
                <p className="NFTItem_Data_Text">Author: <a href={props.value.authorUrl}>{props.value.authorName}</a></p>
                <p className="NFTItem_Data_Text">{props.value.counts} NFT left</p>
                <p className="NFTItem_Data_Text NFTItem_Data_Text_Title">{props.value.title}</p>
                <p className="NFTItem_Data_Text">Price </p>
                <p className="NFTItem_Data_Text NFTItem_Data_Text_Price">
                    <span className="NFTItem_Data_Text_Price_Volute">$</span><span className="NFTItem_Data_Text_Price_Cost">{props.value.price}</span>
                </p>
                <p className="NFTItem_Data_Text"> {props.value.describe}</p>
                <div className="Header_Button NFTItem_BuyBtn" onClick={(event)=>{event.stopPropagation()}}>Buy</div>
            </div>
        </div>
    )
}

export default NFTItem