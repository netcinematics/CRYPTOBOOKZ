import GalleryBook from '../../components/NFTGalleryBook';
import { useState, useEffect } from 'react'
import Link from 'next/link';

export default function BookView() { 
    const [NFTs, setNFTs] = useState([]);

    useEffect(() => { //Automatically load the book data.
        fetchNFTs();
    }, [])
    
    const fetchNFTsPolygon = async() => {
      let nfts; 
      console.log("fetching nfts");

      const fetchURL = `${process.env.NEXT_PUBLIC_POLYGON_MAIN_NFTS}`;
      var requestOptions = {
          method: 'GET'
        };
    
        nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    
      if (nfts) {
        console.log("nfts:", nfts)
        setNFTs(nfts.ownedNfts);
      }
 
    }
  
    const fetchNFTs = async() => {
      let nfts; 
      console.log("fetching nfts");
      const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM"
      const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTs/`;
      var requestOptions = {
          method: 'GET'
        };
       
        console.log('fetch by owner')
        const fetchURL = `${baseURL}?owner=0x46f3397433384F2E31262596642C811929d6c069`;
    
        nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
      if (nfts) {
        console.log("nfts:", nfts)
        setNFTs(nfts.ownedNfts)
        console.log("teststate1",NFTs.length)
      }
    }
  
    const fetchNFTsForCollection = async () => {
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
        }
    }

    return (
      <div className="flex flex-col h-screen overflow-hidden justify-between bg-black text-blue-400">
        <header className="flex w-full justify-between items-center justify-center sm:items-center h-20 gap-x-2 px-4 border-b-2 border-b-indigo-500/50 hover:bg-slate-800 ">{/*BUTTON-FRAME*/}

          <button className={"disabled:bg-slate-500 text-sm rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"}>
            <Link href="/">GALLERY</ Link>
          </button>
          <booktitle> 
            wallet  1
          </booktitle>
          <button disabled className={"disabled:bg-slate-500 disabled:hover:text-black text-xs rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
              onClick={ ()=>{ connectWallet() } // TODO
          }>CONNECT WALLET</button>

        </header> 
        <featureframe className="flex w-full flex-1 flex-col items-center justify-center self-stretch items-stretch px-2 md:px-20 pt-6 pb-12 text-center  overflow-auto">
          <GalleryBook nfts={NFTs}/>
        </featureframe>
      </div>
    )
  }

  BookView.getInitialProps = async (ctx) => {
    // FRONT-LOAD static CONTENT.
    const data = "boooook"; //await User.findOne(ctx.query.id)
    console.log('init book1')
    return {     // return props
        data
    }
  }
