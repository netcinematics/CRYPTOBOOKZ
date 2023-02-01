import GalleryBook from '../../components/NFTGalleryBook';
import { useState, useEffect } from 'react'
import Link from 'next/link';
import dynamic from "next/dynamic"

export default function BookView() { 
    const [NFTs, setNFTs] = useState([]);
    const [nextBatchKey,setBatchKey] = useState('');

    useEffect(() => { //Automatically load the book data.
        fetchNFTsPolygonBatch();   
    }, [])

    const fetchNFTsPolygonBatch = async(pageKey) => {
      let res = {}, nfts=[]; 
     //TODO: add your own .env.local: "https://polygon-mainnet.g.alchemy.com/v2/yourKey/getNFTs/?owner=0xyourWallet"
      const fetchURL = `${process.env.NEXT_PUBLIC_POLYGON_MAIN_NFTS}&pageKey=${pageKey}`;
      // const fetchURL = `${process.env.PROD_POLYGON_MAIN_NFTS}&pageKey=${pageKey}`;
      var requestOptions = { method: 'GET' };
      res = await fetch(fetchURL, requestOptions).then(data => data.json());
      if (res && res.ownedNfts) { 
        setBatchKey((res.pageKey)?res.pageKey:'');
        batchManager.batchKey=res.pageKey;
        nfts = res.ownedNfts.filter( (o)=>{ return (o.metadata.image) } ); //FILTER image not found. nfts.ownedNfts[3].metadata.image
        setNFTs(nfts);   
      }   
    }

    const batchManager = {
      next:function(){ fetchNFTsPolygonBatch(nextBatchKey) },
      last:function(){ fetchNFTsPolygonBatch() }
    }

    const textToCopy = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";
    const CC = dynamic(() => import("../../components/copyClipboard").then(mod => mod.CopyClipboard), { ssr: false })
   
    return (
      <div className="flex flex-col h-screen overflow-hidden justify-between bg-black text-blue-400">
        <header className="flex w-full justify-between items-center justify-center sm:items-center h-20 gap-x-2 px-4 border-b-2 border-b-indigo-500/50">{/*BUTTON-FRAME*/}
          <Link className={"px-4 w-1/5 h-8"} href="/">
              <button className={"w-full h-full disabled:bg-slate-500 text-sm rounded-md text-blue bg-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"}>
                GALLERY</button></ Link>
          <booktitle className="flex"> 
            POLYGON_MAINNET_1
            <div className="ml-2 hover:shadow-indigo-500 hover:shadow-blue-100">{/*icon*/}
                <CC content={textToCopy} />
            </div>
          </booktitle>
          <button disabled className={"disabled:bg-slate-500 disabled:hover:text-black text-xs rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
              onClick={ ()=>{ connectWallet() } // TODO
          }>CONNECT WALLET</button>

        </header> 
        <featureframe className="flex w-full flex-1 flex-col items-center justify-center self-stretch items-stretch px-2 md:px-20 pt-6 pb-12 text-center  overflow-auto">
          <GalleryBook nfts={NFTs} batch={batchManager} batchKey={nextBatchKey}/>
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
