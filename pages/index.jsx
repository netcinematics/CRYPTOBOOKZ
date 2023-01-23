import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'

import IntroView from '../components/IntroView'
import TitleView001 from './001_Book/TitleView'

const CRYPTOBOOKZ = () => {

  let ViewID = "TitleView001";

  const loadBooks_TitleGallery = () => {
    
  };
  const loadBook_TitleLast = () => {

  };
  const loadBook_TitleNext = () => {

  };
  return (
    <div className="flex min-h-screen flex-col bg-black text-slate-600 items-center justify-center">
      <Head>
        <title>CRYPTOBOOKZ</title>
        <link rel="icon" href="/icon1.ico" />
      </Head>

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

      <mainframe className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        { (ViewID === "TitleView001") ? <TitleView001 /> : <IntroView /> }
      </mainframe>
      <footer className="flex h-12 w-full items-center justify-center border-t-2 border-t-indigo-500/50">
        <a
          className="flex items-center justify-center gap-2"
          href="https://linktr.ee/spazefalcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          by {' '}
          <Image src="/img/spazefalcon1.png" className="rounded-xl" alt="" width={40} height={10} />
        </a>
      </footer>
    </div>
  )
}

export default CRYPTOBOOKZ
