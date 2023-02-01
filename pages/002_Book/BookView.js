import GalleryBook from '../../components/NFTGalleryBook';
import { useState, useEffect } from 'react'
import Link from 'next/link';
import dynamic from "next/dynamic"

export default function BookView() { 
    const [NFTs, setNFTs] = useState([]);

    useEffect(() => { //Automatically load the book data.
        fetchNFTs(); //wallet1
    }, [])

    const fetchNFTs = async() => {
      let nfts; 
      const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM"; //au publickey provided by TUTORIAL.
      const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTs/`;
      var requestOptions = {
          method: 'GET'
        };
      //TODO: add your own wallet 0x in .env.local
      // const fetchURL = `${baseURL}?owner=${process.env.NEXT_PUBLIC_OWNER_WALLET}`;
      const fetchURL = `${baseURL}?owner=${process.env.PROD_OWNER_WALLET}`;
      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
      if (nfts) {
        setNFTs(nfts.ownedNfts)
      }
    }    

    const textToCopy = "0xE52A031E3d5b0Dcb086A30e533CF6a71c77f6C27";
    const CC = dynamic(() => import("../../components/copyClipboard").then(mod => mod.CopyClipboard), { ssr: false })

    return (
      <div className="flex flex-col h-screen overflow-hidden justify-between bg-black text-blue-400">
        <header className="flex w-full justify-between items-center justify-center sm:items-center h-20 gap-x-2 px-4 border-b-2 border-b-indigo-500/50">{/*BUTTON-FRAME*/}
        <Link className={"px-4 w-1/5 h-8"} href="/">
            <button className={"w-full h-full disabled:bg-slate-500 text-sm rounded-md text-blue bg-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"}>
              GALLERY</button></ Link>
          <booktitle className="flex"> 
            ETH_MAINNET_1
            <div className="ml-2 hover:shadow-indigo-500 hover:shadow-blue-100">{/*icon*/}
              <CC content={textToCopy} />
            </div>
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
