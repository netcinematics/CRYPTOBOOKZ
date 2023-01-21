import Head from 'next/head'
import Image from 'next/image'

const CRYPTOBOOKZ = () => {
  const loadBooks_TitleGallery = () => {
    
  };
  const loadBook_TitleLast = () => {

  };
  const loadBook_TitleNext = () => {

  };
  return (
    <div className="flex min-h-screen flex-col bg-black text-slate-600 items-center justify-center py-2">
      <Head>
        <title>CRYPTOBOOKZ</title>
        <link rel="icon" href="/icon1.ico" />
      </Head>

      <header className="flex w-full justify-center sm:items-center h-20 gap-x-2">{/*BUTTON-FRAME*/}

          <button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 w-1/5"} onClick={
              () => { loadBooks_TitleGallery(); }
            }>NFT~BOOKS</button>

          <button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 w-1/5"} 
            onClick={ ()=>{ loadBook_TitleLast() }
            }>LAST~BOOK</button>

          <button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 w-1/5"} 
            onClick={ ()=>{ loadBook_TitleNext() }
            }>NEXT~BOOK</button>

          <input className={"rounded-md pl-4 h-10 mt-4"} disabled={true} type={"text"} placeholder="load wallet or collection"></input>

          <button className={"disabled:bg-slate-500 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 w-1/5"} 
            onClick={ ()=>{ fetchNFTs() }
            }>LOAD~BOOK</button>

      
      </header> 



      <header className="flex h-24 w-full items-center justify-center border-b">
        {/* <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          by {' '}
          <Image src="/img/spazefalcon1.png" className="rounded-xl" alt="" width={60} height={12} />
        </a> */}
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://linktr.ee/spazefalcon">
            CRYPTOBOOKZ!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          by {' '}
          <Image src="/img/spazefalcon1.png" className="rounded-xl" alt="" width={60} height={12} />
        </a>
      </footer>
    </div>
  )
}

export default CRYPTOBOOKZ
