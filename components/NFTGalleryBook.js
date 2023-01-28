import { useState } from 'react';
import { sculptureList } from '../data/data.js';

export default function GalleryBook({ nfts }) {
  console.log("test3",nfts);
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
  
    function handleLastClick() {
        console.log("TEST1",nfts.length,index)
      if(index<1){ setIndex(nfts.length-1)} //loop around index
      else { setIndex(index - 1); }
    }

    function handleNextClick() {
      console.log("TEST2",nfts.length,index)
      if(index >= nfts.length-1){ setIndex(0); } //loop around index        
      else { setIndex(index + 1); }
    }
  
    function handleMoreClick() {
      setShowMore(!showMore);
    }
    let nft = nfts[index];
    return (

<galleryframe className="h-full"> 

      <div style={{color:'steelblue'}} className="h-full self-stretch items-stretch mb-1">        

{ (nfts.length<1) ? <span>loading...</span>  :

<div className="flex flex-col bg-indigo-800/20 rounded-xl self-center items-center h-full ">

{/* <img className="rounded-xl self-center w-full sm:w-1/2 md:w-1/2 xl:w-1/2 2xl:w-1/3 my-4" src={nft.media[0].gateway} /> */}
{/* <img className="flex  lg:max-w-2xl  md:max-w-2xl sm:max-w-2xl lg:max-h-md  md:max-h-md sm:max-h-md  rounded-xl self-center w-full my-4" src={nft.media[0].gateway} /> */}
 { showMore ?
<img className="flex h-8/10 sm:flex-auto w-auto  lg:max-w-2xl  md:max-w-2xl sm:max-w-2xl 
                 rounded-xl self-center w-full my-4" style={{ width: 'auto', height: '50%' }} src={nft.media[0].gateway} />
:
<img className="flex h-8/10 sm:flex-auto w-auto  lg:max-w-2xl  md:max-w-2xl sm:max-w-2xl 
                 rounded-xl self-center w-full my-4" style={{height: '70%', width: 'auto' }} src={nft.media[0].gateway} />
 }
{/* <img className="flex md:flex-grow lg:max-w-2xl rounded-xl self-center w-full my-4" src={nft.media[0].gateway} /> */}
{/* <img className="max-w-2xl my-4" src={nft.media[0].gateway} /> */}

   {/* <datatray className="border border-blue-400 rounded-lg m-2 p-2 "> */}
   <datatray className="flex flex-col flex-2-0 border border-blue-400 rounded-lg m-2 p-2 ">
        <h2>
          <i>{nft.title} </i>
          {/* <i>{sculpture.name} </i> */}
          by {"spazefalcon"}
          {/* by {sculpture.artist} */}
        </h2>

        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'}
        </button>
        {showMore && <p>{(nft.description)?nft.description:'no data'}</p>}

        </datatray>
        </div>

}

      </div>

      <footer className="flex  my-1 align-center text-center justify-center">
    <button className={"disabled:bg-slate-50 flex items-center justify-center rounded-md text-blue bg-blue-400 text-sm py-1 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
        onClick={handleLastClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
          LAST 
        </button>
        <h3 className="mt-1 mx-2">
          ({index + 1} of {nfts.length})
        </h3>
        <button className={"disabled:bg-slate-50 flex items-center justify-center rounded-md bg-blue-400 text-sm py-1 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-green-800 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
        onClick={handleNextClick}>
          NEXT               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
        </button>
        </footer>

      <style jsx >{` `}</style>
</galleryframe>
    );
  }