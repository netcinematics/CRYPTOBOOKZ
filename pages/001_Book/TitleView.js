import Image from 'next/image'
export default function TitleView() {

    return (
        <main className="flex w-full flex-1 flex-col items-center pt-6 text-center">
        {/* <div className="my-4 font-bold">
        <span className="text-md">CRYPTOBOOK:</span>{' '}
        <a className="text-blue-600" href="https://linktr.ee/spazefalcon">
            SPAZEBOTZ!
        </a>
        </div> */}
    

        <Image src="/img/spazebotzTitle_1080_SQ_5.jpg" className="rounded-xl shadow-lg shadow-cyan-500/50" alt="" width={600} height={600} />

        <p className="mt-3 text-2md">
        Origin in SpazeBot~City {' '}
        <code className="rounded-md p-3 font-mono  text-1md">
        <span>...more... </span>1/2023 
        ~:)
        </code>
        </p>
    
        <div className="flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <a href="https://nextjs.org/docs"
            className="mt-4 w-96 rounded-xl border items-center justify-center text-center border-b-2 border-blue-400 hover:border-indigo-500/50 p-1 text-left text-blue-600 hover:text-indigo-600 active:text-slate-700 shadow-lg shadow-cyan-500/50"
        >
            <h3 className="text-2xl font-bold mb-2">Read~Now &rarr;</h3>
            {/* <p>more...</p>
            <p className="mt-4 text-xl">
            Find in-depth information about Next.js features and its API.
            </p> */}
        </a>
    
        </div>
        </main>
    )
    }