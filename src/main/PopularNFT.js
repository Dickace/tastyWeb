import React, {useState} from "react";
import Carousel from "react-elastic-carousel"
import NFTMiniItem from "../AdditionalComponents/NFTMiniItem";
function PopularNFT () {

    const [popularNFTItem, ] = useState([
        {id: '1', previewUrl:'https://picsum.photos/1200/900', price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com'  },
        {id: '2', previewUrl:'https://picsum.photos/1000/1000', price: '322', counts: '6', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '3', previewUrl:'https://picsum.photos/355/350', price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '4', previewUrl:'https://picsum.photos/355/350', price: '322', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '5', previewUrl:'https://picsum.photos/355/350', price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '6', previewUrl:'https://picsum.photos/355/350', price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '7', previewUrl:'https://picsum.photos/355/350', price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '8', previewUrl:'https://picsum.photos/355/350', price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum' ,authorUrl: 'https://www.google.com'},
        {id: '9', previewUrl:'https://picsum.photos/355/350', price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '10', previewUrl:'https://picsum.photos/355/350', price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
    ])



    return(
        <div className="PopularNFT_Container">
            <div className="PopularNFT_Container_Title">
                <span>Trends NFT</span>
            </div>
            <div className="PopularNFT_Container_Carousel">
                <Carousel
                    isRTL={false}
                    breakPoints={[
                    {width:1, itemsToShow:1},
                    {width: 700, itemsToShow: 2},
                    {width: 1050, itemsToShow: 3},
                    {width: 1350, itemsToShow: 4},
                    {width: 1700, itemsToShow: 5},

                ]}
                          itemPadding={[10, 10]}

                          itemsToScroll={1}
                          >
                    {popularNFTItem.map((value, index) => {
                        return(
                            <NFTMiniItem
                                Value={value}
                                key={value.id}
                                index={index}/>
                        )

                    })}
                </Carousel>
            </div>



        </div>
    );
}
export default PopularNFT