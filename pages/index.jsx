import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';

import AboutView from '../components/AboutView'
import ContactView from '../components/ContactView'
import TitleView001 from './001_Book/TitleView'
import TitleView002 from './002_Book/TitleView'

const CRYPTOBOOKZ = () => {

  // let ViewID = '';//"TitleView001";
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
    if (bookIDX===1){
      return  <TitleView001 />
    }else if (bookIDX===2){
      return  <TitleView002 />
    } else {
      return  <AboutView />
    }  
  };


  let bookList = [1,2,3,4];  
  // let book = bookList[bookIDX];
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


          <maintitle className="text-md md:text-2xl" style={{'font-family':'fantasy'}}>C R Y P T O B O O K Z</maintitle>


          <button disabled className={"disabled:bg-slate-500 disabled:hover:text-black text-xs rounded-md text-blue bg-blue-400 px-4 py-2 w-1/5 hover:bg-blue-400 hover:text-white hover:shadow-blue-500 hover:border-indigo-500/50 text-slate-700 active:text-indigo-700 shadow-lg shadow-cyan-500/50 active:shadow-indigo-500"} 
              onClick={ ()=>{ connectWallet() }
          }>CONNECT WALLET</button>
        

      </header> 
      {/* custom html frames */}
      <mainframe className="flex w-full flex-1 flex-col items-center justify-center px-2 md:px-20 text-center">
        {         
          //DYNAMIC-VIEW-DISPLAY
          (() => {
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
      </mainframe>
      <footer className="flex h-12 w-full px-2 md:px-10 justify-between items-center justify-center border-t-2 border-t-indigo-500/50">
        {/* <Link className="" href="/">about</ Link> */}
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




        {/* <a
          className="flex items-center justify-center gap-2"
          href="https://linktr.ee/spazefalcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          by {' '}
          <Image src="/img/spazefalcon1.png" className="rounded-xl" alt="" width={40} height={8} />
        </a> */}
        {/* <Link className="" href="/">support</ Link> */}
        <button className={""} 
            onClick={ ()=>{ setViewIDX("ContactView");} //"TitleView001"); }
            }>contact</button> 
      </footer>
      {/* <style jsx global>{` `}</style> */}
    </div>
    
  )
}

export default CRYPTOBOOKZ
