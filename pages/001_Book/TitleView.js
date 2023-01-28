import Link from 'next/link';
import Image from 'next/image'
export default function TitleView() {

    return (
        <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        {/* <div className="my-4 font-bold">
        <span className="text-md">CRYPTOBOOK:</span>{' '}
        <a className="text-blue-600" href="https://linktr.ee/spazefalcon">
            SPAZEBOTZ!
        </a>
        </div> */}
    
    <Link href="/001_Book/book1">
        <Image src="/img/spazebotzTitle_1080_SQ_5.jpg" className="rounded-xl shadow-lg hover:shadow-blue-400 shadow-cyan-500 active:shadow-indigo-500" alt="" width={600} height={600} />
        </Link>
        <p className="mt-6 text-2md">
        Originz in SpazeBot~City {' '}
        <code className="rounded-md p-3 font-mono  text-1md">
        1/2020<span> ...more</span> 
      {/* TODO more */}
        </code>
        </p>
    
        {/* <div className="flex max-w-4xl flex-wrap items-center justify-around sm:w-full"> */}
        <div className="mt-2 pb-1 pt-1 px-4 rounded-xl border items-center justify-center text-center border-b-2 border-blue-400  hover:shadow-blue-500 hover:border-indigo-500/50 p-1 text-left text-blue-600 hover:text-indigo-600 active:text-slate-700 shadow-lg shadow-blue-500/50 active:shadow-indigo-500">
        <Link href="/001_Book/book1">~OPEN1~</Link>
        {/* <a href=""
            className="mt-4 "
        >
            <Link href="/001_Book/book1">
            <h3 className="text-2xl font-bold mb-2">ENTER</h3> </Link>
        </a> */}
       
        </div>
        </main>
    )
    }