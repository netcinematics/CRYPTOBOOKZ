import Link from 'next/link'

export default function NavBooks({dataManager}) {

    return (
        // <div style={{color: 'steelblue'}}>
        // <ul> 
        // <li>
        // <Link href="/">Home</Link>
        // </li>
        // <li>
        // <Link href="/book1">BOOK 1</Link>
        // </li>
        // <li>
        // <Link href="/blog/hello-world">...</Link>
        // </li>
        // </ul>
        // </div>
        <header className="h-15 bg-black ">{/* PAGE Header */}
        <div className="flex w-full justify-center sm:items-center gap-x-2">{/*BUTTON-FRAME*/}
 
           <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} onClick={
             () => { dataManager.data1(); }
           }>NFT~BOOKS</button>
 
           <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} 
           onClick={ ()=>{ dataManager.data2() }
           }>LAST~BOOK</button>
 
           <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} 
           onClick={ ()=>{ dataManager.data3() }
           }>NEXT~BOOK</button>
 
           <input className={"rounded-md pl-4 h-10 mt-4"} disabled={true} type={"text"} placeholder="load wallet or collection"></input>
 
           <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} 
           onClick={ ()=>{ dataManager.data2() }
           }>LOAD~BOOK</button>
 
         </div>
     </header>


    )
}
