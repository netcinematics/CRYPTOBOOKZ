import GalleryBook from '../../components/NFTBookGallery';
import { NFTCard } from "../../components/nftCard"
// import NavBooks from '../components/NavBooks';
import Link from 'next/link';
import { useState } from 'react'
export default function Book1() {
    console.log("init_book1")
    // const [wallet, setWalletAddress] = useState("");
    // const [collection, setCollectionAddress] = useState("");
    const [NFTs, setNFTs] = useState([]);
    // let NFTs = []; 
    // const setNFTs = (nftz) => {
    //   NFTs = nftz;
    // } 
    // const [fetchForCollection, setFetchForCollection]=useState(false);
  
    //Pagination Variables.
    // let viewNum = 3; //number of items in view screen.
    // let viewIndex = 0; //first item in view
    // const [viewPage, setPage] = useState([]); //items to view
  
    // const updateViewSet = (newIndex) => {
    //   if(!NFTs.length){ return }
    //   if(newIndex<0){viewIndex = 0}
    //   else if (newIndex >= NFTs.length){ 
    //     if(NFTs.length>=viewNum){ viewIndex = NFTs.length-viewNum;} 
    //     else {viewIndex = 0}
    //   } else {viewIndex = newIndex} //error trap
  
    //   const newView = [];
    //   if(NFTs[viewIndex]){newView.push(new Object(NFTs[viewIndex]))}else{newView.push({})}
    //   if(NFTs[viewIndex+1]){newView.push(new Object(NFTs[viewIndex+1]))}else{newView.push({})}
    //   if(NFTs[viewIndex+2]){newView.push(new Object(NFTs[viewIndex+2]))}else{newView.push({})}
    //   // setPage(newView);
    //   // return [NFTs[newIndex],NFTs[newIndex+1],NFTs[newIndex+2]]
  
    // }
  
  
    const fetchNFTsPolygon = async() => {
      // const aKey = process.env.NEXT_PUBLIC_ANALYTICS_ID;
      // const PRIVATE_KEY = process.env.PRIVATE_KEY;
      // networks: {
      //   mumbai: {
      //     url: process.env.TESTNET_RPC,
      //     accounts: [process.env.PRIVATE_KEY]
      //   },
      // },
      // etherscan: {
      //   apiKey: process.env.POLYGONSCAN_API_KEY
      // }
      let nfts; 
      console.log("fetching nfts");
      // const api_key = process.env.PRIVATE_KEY; //"A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM"
      //const baseURL = 'https://eth-mainnet.g.alchemy.com/v2/A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM/getNFTs/?owner=0x46f3397433384F2E31262596642C811929d6c069';
      // const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTs/`;
      // const baseURL = `${process.env.TESTNET_RPC}/getNFTs/`;
      const fetchURL = `${process.env.NEXT_PUBLIC_POLYGON_MAIN_NFTS}`;
      var requestOptions = {
          method: 'GET'
        };
       
      // if (!collection.length) {
      //   console.log('fetch by owner')
        // const fetchURL = `${baseURL}?owner=${wallet}`;
        // const fetchURL = `${baseURL}?owner=0x46f3397433384F2E31262596642C811929d6c069`;
    
        nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
      // } else {
      //   console.log("fetching nfts for collection owned by address")
      //   const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
      //   nfts= await fetch(fetchURL, requestOptions).then(data => data.json())
      // }
    
      if (nfts) {
        console.log("nfts:", nfts)
        setNFTs(nfts.ownedNfts);
        // setTimeout(function(){ updateViewSet(0)},100);
      }
  
  
    }
  
    const fetchNFTs = async() => {
      let nfts; 
      console.log("fetching nfts");
      const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM"
      //const baseURL = 'https://eth-mainnet.g.alchemy.com/v2/A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM/getNFTs/?owner=0x46f3397433384F2E31262596642C811929d6c069';
      const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTs/`;
      var requestOptions = {
          method: 'GET'
        };
       
    //   if (!collection.length) {
        console.log('fetch by owner')
        // const fetchURL = `${baseURL}?owner=${wallet}`;
        const fetchURL = `${baseURL}?owner=0x46f3397433384F2E31262596642C811929d6c069`;
    
        nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    //   } else {
    //     console.log("fetching nfts for collection owned by address")
    //     const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
    //     nfts= await fetch(fetchURL, requestOptions).then(data => data.json())
    //   }
    
      if (nfts) {
        console.log("nfts:", nfts)
        setNFTs(nfts.ownedNfts)
        console.log("teststate1",NFTs.length)
        // setTimeout(function(){ updateViewSet(0)},100);
      }
    }
  
    const fetchNFTsForCollection = async () => {
      // if (collection.length) {
        // const collection = '0xd90d4db4966ecb520847e0723908427c2a7a4622';//polygon rarbl sonic
        // const collection = '0x495f947276749Ce646f68AC8c248420045cb7b5e'; //OS cozmo
        const collection = '0xe52a031e3d5b0dcb086a30e533cf6a71c77f6c27'; //AU cozmo 
        var requestOptions = {
          method: 'GET'
        };
        const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM"
        const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTsForCollection/`;
        const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
        console.log('Fetch collection',fetchURL)
        const nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
        if (nfts) {
          console.log("NFTs in collection:", nfts)
          setNFTs(nfts.nfts)
          // updateViewSet(0);
        }
      // }
    }

    // const dataManager = {
    //     data1:()=>{ fetchNFTsForCollection() },
    //     data2:()=>{ fetchNFTs() },
    //     data3:()=>{ fetchNFTsPolygon() },
    // }
    return (
        <>
        <div className="flex flex-col h-screen overflow-hidden justify-between bg-black text-blue-400">
        <header className="flex w-full items-center justify-center sm:items-center h-20 gap-x-2 px-4 border-b-2 border-b-indigo-500/50 hover:bg-slate-800 ">{/*BUTTON-FRAME*/}

<button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
  onClick={ () => { /*loadBooks_TitleGallery();*/ } }
  ><Link href="/">NFT~BOOKZ</ Link></button>

<button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5  hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
  onClick={ ()=>{ loadBook_TitleLast() }
  }>LAST~BOOK</button>

<button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
  onClick={ ()=>{ loadBook_TitleNext() }
  }>NEXT~BOOK</button>

<input className={"rounded-md pl-4 h-10"} disabled={true} type={"text"} placeholder="load wallet or collection"></input>

<button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
  onClick={ ()=>{ fetchNFTs() }
  }>LOAD~BOOK</button>


</header> 

<featureframe className="flex w-full flex-1 flex-col items-center justify-center self-stretch items-stretch px-20 py-10 text-center">
{/* { (ViewID === "TitleView001") ? <TitleView001 /> : <IntroView /> } */}
<fullDIV className=" h-full"> 
<GalleryBook nfts={NFTs}/>
</fullDIV>
</featureframe>

            {/* <div className="flex flex-col h-full items-center justify-center gap-y-3 bg-black">
        
                <div className='flex sm:flex-col h-full sm:items-center gap-y-8 mt-6 gap-x-2 '>
                {
                    NFTs.length && NFTs.map( (nft,i) => {
                        return (
                        <NFTCard nft={nft} key={'nftcard'+i}></NFTCard>
                        )
                    })
                    
                }
                </div>
            </div> */}


        </div>

        </>

    )
  }

  Book1.getInitialProps = async (ctx) => {
    // FRONT-LOAD with CONTENT.
    const data = "boooook"; //await User.findOne(ctx.query.id)
    console.log('init book1')
    // return props
    return {
        data
    }
  }