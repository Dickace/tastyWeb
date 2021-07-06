import React, {useState} from 'react'
import NFTMiniItem from "../AdditionalComponents/NFTMiniItem";

function MarketplaceItems(){
    const [nftItems,] = useState([
        {id: '1', previewUrl:'https://picsum.photos/1200/900', fullNFT:'https://picsum.photos/1200/900', describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. Integer enim neque volutpat ac. Porttitor massa id neque aliquam vestibulum. Metus vulputate eu scelerisque felis imperdiet proin. Tristique nulla aliquet enim tortor at auctor urna. Volutpat maecenas volutpat blandit aliquam etiam. Quis lectus nulla at volutpat diam ut venenatis tellus. Ac turpis egestas maecenas pharetra. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel risus commodo viverra maecenas accumsan lacus. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet mattis vulputate enim nulla aliquet. Condimentum mattis pellentesque id nibh tortor id. Vel facilisis volutpat est velit egestas dui. Magna sit amet purus gravida. Vitae nunc sed velit dignissim sodales ut eu. Auctor augue mauris augue neque gravida in fermentum. Purus in massa tempor nec feugiat.", price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com'  },
        {id: '2', previewUrl:'https://picsum.photos/1000/1000',fullNFT:'https://picsum.photos/1000/1000',  describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. Integer enim neque volutpat ac. Porttitor massa id neque aliquam vestibulum. Metus vulputate eu scelerisque felis imperdiet proin. Tristique nulla aliquet enim tortor at auctor urna. Volutpat maecenas volutpat blandit aliquam etiam. Quis lectus nulla at volutpat diam ut venenatis tellus. Ac turpis egestas maecenas pharetra. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel risus commodo viverra maecenas accumsan lacus. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet mattis vulputate enim nulla aliquet. Condimentum mattis pellentesque id nibh tortor id. Vel facilisis volutpat est velit egestas dui. Magna sit amet purus gravida. Vitae nunc sed velit dignissim sodales ut eu. Auctor augue mauris augue neque gravida in fermentum. Purus in massa tempor nec feugiat.", price: '322', counts: '6', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '3', previewUrl:'https://picsum.photos/426/633',fullNFT:'https://picsum.photos/426/633', describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. Integer enim neque volutpat ac. Porttitor massa id neque aliquam vestibulum. Metus vulputate eu scelerisque felis imperdiet proin. Tristique nulla aliquet enim tortor at auctor urna. Volutpat maecenas volutpat blandit aliquam etiam. Quis lectus nulla at volutpat diam ut venenatis tellus. Ac turpis egestas maecenas pharetra. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel risus commodo viverra maecenas accumsan lacus. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet mattis vulputate enim nulla aliquet. Condimentum mattis pellentesque id nibh tortor id. Vel facilisis volutpat est velit egestas dui. Magna sit amet purus gravida. Vitae nunc sed velit dignissim sodales ut eu. Auctor augue mauris augue neque gravida in fermentum. Purus in massa tempor nec feugiat.",  price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '4', previewUrl:'https://picsum.photos/745/622',fullNFT:'https://picsum.photos/745/622', describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. Integer enim neque volutpat ac. Porttitor massa id neque aliquam vestibulum. Metus vulputate eu scelerisque felis imperdiet proin. Tristique nulla aliquet enim tortor at auctor urna. Volutpat maecenas volutpat blandit aliquam etiam. Quis lectus nulla at volutpat diam ut venenatis tellus. Ac turpis egestas maecenas pharetra. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel risus commodo viverra maecenas accumsan lacus. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet mattis vulputate enim nulla aliquet. Condimentum mattis pellentesque id nibh tortor id. Vel facilisis volutpat est velit egestas dui. Magna sit amet purus gravida. Vitae nunc sed velit dignissim sodales ut eu. Auctor augue mauris augue neque gravida in fermentum. Purus in massa tempor nec feugiat.",  price: '322', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '5', previewUrl:'https://picsum.photos/977/457',fullNFT:'https://picsum.photos/977/457', describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. Integer enim neque volutpat ac. Porttitor massa id neque aliquam vestibulum. Metus vulputate eu scelerisque felis imperdiet proin. Tristique nulla aliquet enim tortor at auctor urna. Volutpat maecenas volutpat blandit aliquam etiam. Quis lectus nulla at volutpat diam ut venenatis tellus. Ac turpis egestas maecenas pharetra. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel risus commodo viverra maecenas accumsan lacus. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet mattis vulputate enim nulla aliquet. Condimentum mattis pellentesque id nibh tortor id. Vel facilisis volutpat est velit egestas dui. Magna sit amet purus gravida. Vitae nunc sed velit dignissim sodales ut eu. Auctor augue mauris augue neque gravida in fermentum. Purus in massa tempor nec feugiat.",  price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '6', previewUrl:'https://picsum.photos/355/350',fullNFT:'https://picsum.photos/900/1200', describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. Integer enim neque volutpat ac. Porttitor massa id neque aliquam vestibulum. Metus vulputate eu scelerisque felis imperdiet proin. Tristique nulla aliquet enim tortor at auctor urna. Volutpat maecenas volutpat blandit aliquam etiam. Quis lectus nulla at volutpat diam ut venenatis tellus. Ac turpis egestas maecenas pharetra. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel risus commodo viverra maecenas accumsan lacus. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet mattis vulputate enim nulla aliquet. Condimentum mattis pellentesque id nibh tortor id. Vel facilisis volutpat est velit egestas dui. Magna sit amet purus gravida. Vitae nunc sed velit dignissim sodales ut eu. Auctor augue mauris augue neque gravida in fermentum. Purus in massa tempor nec feugiat.",  price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '7', previewUrl:'https://picsum.photos/355/350',fullNFT:'https://picsum.photos/900/1200',  describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. Integer enim neque volutpat ac. Porttitor massa id neque aliquam vestibulum. Metus vulputate eu scelerisque felis imperdiet proin. Tristique nulla aliquet enim tortor at auctor urna. Volutpat maecenas volutpat blandit aliquam etiam. Quis lectus nulla at volutpat diam ut venenatis tellus. Ac turpis egestas maecenas pharetra. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel risus commodo viverra maecenas accumsan lacus. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet mattis vulputate enim nulla aliquet. Condimentum mattis pellentesque id nibh tortor id. Vel facilisis volutpat est velit egestas dui. Magna sit amet purus gravida. Vitae nunc sed velit dignissim sodales ut eu. Auctor augue mauris augue neque gravida in fermentum. Purus in massa tempor nec feugiat.", price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '8', previewUrl:'https://picsum.photos/355/350',fullNFT:'https://picsum.photos/900/1200',  describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. Integer enim neque volutpat ac. Porttitor massa id neque aliquam vestibulum. Metus vulputate eu scelerisque felis imperdiet proin. Tristique nulla aliquet enim tortor at auctor urna. Volutpat maecenas volutpat blandit aliquam etiam. Quis lectus nulla at volutpat diam ut venenatis tellus. Ac turpis egestas maecenas pharetra. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel risus commodo viverra maecenas accumsan lacus. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet mattis vulputate enim nulla aliquet. Condimentum mattis pellentesque id nibh tortor id. Vel facilisis volutpat est velit egestas dui. Magna sit amet purus gravida. Vitae nunc sed velit dignissim sodales ut eu. Auctor augue mauris augue neque gravida in fermentum. Purus in massa tempor nec feugiat.", price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum' ,authorUrl: 'https://www.google.com'},
        {id: '9', previewUrl:'https://picsum.photos/355/350',fullNFT:'https://picsum.photos/900/1200',  describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. Integer enim neque volutpat ac. Porttitor massa id neque aliquam vestibulum. Metus vulputate eu scelerisque felis imperdiet proin. Tristique nulla aliquet enim tortor at auctor urna. Volutpat maecenas volutpat blandit aliquam etiam. Quis lectus nulla at volutpat diam ut venenatis tellus. Ac turpis egestas maecenas pharetra. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel risus commodo viverra maecenas accumsan lacus. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet mattis vulputate enim nulla aliquet. Condimentum mattis pellentesque id nibh tortor id. Vel facilisis volutpat est velit egestas dui. Magna sit amet purus gravida. Vitae nunc sed velit dignissim sodales ut eu. Auctor augue mauris augue neque gravida in fermentum. Purus in massa tempor nec feugiat.", price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
        {id: '11', previewUrl:'https://picsum.photos/355/350',fullNFT:'https://picsum.photos/900/1200', describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc mi. Integer enim neque volutpat ac. Porttitor massa id neque aliquam vestibulum. Metus vulputate eu scelerisque felis imperdiet proin. Tristique nulla aliquet enim tortor at auctor urna. Volutpat maecenas volutpat blandit aliquam etiam. Quis lectus nulla at volutpat diam ut venenatis tellus. Ac turpis egestas maecenas pharetra. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel risus commodo viverra maecenas accumsan lacus. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet mattis vulputate enim nulla aliquet. Condimentum mattis pellentesque id nibh tortor id. Vel facilisis volutpat est velit egestas dui. Magna sit amet purus gravida. Vitae nunc sed velit dignissim sodales ut eu. Auctor augue mauris augue neque gravida in fermentum. Purus in massa tempor nec feugiat.", price: '228', counts: '3', title:'Lorem Ipsum', authorName: 'Lorem Ipsum',authorUrl: 'https://www.google.com' },
    ])

    return(
        <div>
            {


                   (nftItems!=null) ? <div className="Marketplace_Items" >
                       {nftItems.map((Value,index) => {
                           return(
                               <NFTMiniItem Value={Value} key={index}/>
                           )
                       })
                       }
                   </div>
                        :
                            <p>No available items to purchase</p>

                    }

        </div>
    )
}
export default MarketplaceItems