import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import dynamic from "next/dynamic"
import { useState } from 'react';

import AboutView from '../views/AboutView'
import ContactView from '../views/ContactView'
import TitleView001 from './001_Book/TitleView'
import TitleView002 from './002_Book/TitleView'
import TitleView003 from './003_Book/TitleView'

const CRYPTOBOOKZ = () => {
  const [viewIDX, setViewIDX] = useState('TitleView');
  const [bookIDX, setBookIDX] = useState(0);

  const connectWallet = () => {
    //TODO: window.ethereum
  };  

  const loadBooks_TitleMain = () => {
    //TODO: show scrollable grid of bookz.
  };  

  const loadBook_TitleLast = () => { 
    if(bookIDX<1){ setBookIDX(bookList.length-1)} //loop around index
    else { setBookIDX(bookIDX - 1); }
  };

  const loadBook_TitleNext = () => {
    if(bookIDX >= bookList.length-1){ setBookIDX(0); setViewIDX("TitleView"); } //loop around index        
    else { setBookIDX(bookIDX + 1); setViewIDX("TitleView"); }
  };

  const renderbookList = (pageNUM) => {
    let page = null;
    if (bookIDX===0){ return bookList[0];
    } else if (bookIDX===1){ return bookList[1];
    } else if (bookIDX===2){ return bookList[2];
    } else if (bookIDX===3){ return bookList[3];
    } else { return bookList[4];
    }  
  };

  const textToCopy = "0x12web3...ski";
  const CC = dynamic(() => import("../components/copyClipboard").then(mod => mod.CopyClipboard), { ssr: false })

  let bookList = [<TitleView001/>,<TitleView002/>,<TitleView003/>,<AboutView/>,<ContactView/>];  

  return (
    <div className="flex min-h-screen flex-col bg-black text-slate-600 items-center justify-center">
      <Head>
        <title>CRYPTOBOOKZ</title>
        <link rel="icon" href="/icon1.ico" />
      </Head>

      <header className="flex w-full items-center justify-between justify-center sm:items-center h-20 gap-x-2 px-4 border-b-2 border-b-indigo-500/50  ">{/*BUTTON-FRAME*/}
          <button disabled className={"disabled:bg-slate-500 disabled:hover:text-black rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
            onClick={ () => { loadBooks_TitleMain(); } }
            ><Link href="/">MAIN</ Link></button>

          <maintitle className="flex text-md md:text-2xl" style={{'font-family':'fantasy'}}>
            C R Y P T O B O O K Z
            <div className="ml-2 hover:shadow-indigo-500 hover:shadow-blue-100">{/*icon*/}
              <CC content={textToCopy} />
            </div>
          </maintitle>

          <button disabled className={"disabled:bg-slate-500 disabled:hover:text-black text-xs rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
              onClick={ ()=>{ connectWallet() }
          }>CONNECT WALLET{/* TODO */}
          </button>
    
      </header> 
      {/* custom html frames */}
      <booklistframe className="flex w-full flex-1 flex-col items-center justify-center px-2 md:px-20 text-center">
      {         
        (() => { //DYNAMIC-VIEW-DISPLAY
          if (viewIDX === "TitleView") {
            return renderbookList();
            // return  <TitleView001 />
          } else if (viewIDX === "AboutView") {
            return <AboutView /> ;
          } else if (viewIDX === "ContactView") {
            return <ContactView /> ;
          }
        })()
      }
      </booklistframe>
      <footer className="flex h-12 w-full px-2 md:px-10 justify-between items-center justify-center border-t-2 border-t-indigo-500/50">
        <button className={""} 
            onClick={ ()=>{ setViewIDX("AboutView");}
        }>about</button> 
        <booknav className="flex w-auto justify-between justify-center items-center">
          <button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-1 my-1 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
            onClick={ ()=>{ loadBook_TitleLast() }
          }>LAST</button>

          <booknum className="mx-1 sm:mx-4"> {bookIDX + 1} of {bookList.length}</booknum>

          <button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-1 my-1 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
            onClick={ ()=>{ loadBook_TitleNext() }
          }>NEXT</button>
        </booknav>

        <button className={""} 
            onClick={ ()=>{ setViewIDX("ContactView");} 
        }>contact</button> 
      </footer>
      {/* <style jsx global>{` `}</style> */}
    </div>
  )
}

export default CRYPTOBOOKZ
