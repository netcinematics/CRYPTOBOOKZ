export default function IntroView() {

return (
    <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
    <h1 className="text-6xl font-bold">
    <span className="text-md">Welcome to</span>{' '}
    <a className="text-blue-600" href="https://linktr.ee/spazefalcon">
        CRYPTOBOOKZ!
    </a>
    </h1>

    <p className="mt-3 text-2xl">
    NFT~Bookz,{' '}
    <code className="rounded-md p-3 font-mono text-lg">
    mixed-media adventures... to create, collect, and share. 
    ~ : )
    </code>
    </p>

    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
    <a href="https://nextjs.org/docs"
        className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
        <h3 className="text-2xl font-bold">About &rarr;</h3>
        <p className="mt-4 text-xl">
        Find in-depth information about Next.js features and its API.
        </p>
    </a>

    <a href="https://nextjs.org/learn"
        className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
        <h3 className="text-2xl font-bold">Learn &rarr;</h3>
        <p className="mt-4 text-xl">
        Learn about Next.js in an interactive course with quizzes!
        </p>
    </a>

    <a href="https://github.com/vercel/next.js/tree/canary/examples"
        className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
        <h3 className="text-2xl font-bold">Examples &rarr;</h3>
        <p className="mt-4 text-xl">
        Discover and deploy boilerplate example Next.js projects.
        </p>
    </a>

    <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="mt-6 w-96 rounded-xl border border-b-2 border-blue-400 hover:border-indigo-500/50 p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
        <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
        <p className="mt-4 text-xl">
        Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
    </a>
    </div>
    </main>
)
}