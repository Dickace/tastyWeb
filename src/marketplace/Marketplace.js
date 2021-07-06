import React from 'react'
import MarketplaceFilter from "./MarketplaceFilter";
import MarketplaceItems from "./MarketplaceItems";

function Marketplace (){
    return(
        <div className="Marketplace">
            <div className="Marketplace_Container">
                <p className="Marketplace_Container_Title">
                    Marketplace
                </p>
                <MarketplaceFilter/>
                <MarketplaceItems/>
            </div>

        </div>
    )
}
export default Marketplace