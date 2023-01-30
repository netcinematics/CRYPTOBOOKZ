import Link from 'next/link';
import Image from 'next/image'
import TitleIMG from './img/title2.png'

export default function TitleView() {
return (
<main className="flex w-full flex-1 flex-col items-center justify-center text-center">
    <Link href="/002_Book/BookView">
        <Image src={TitleIMG} alt="Title Cover" className="rounded-xl shadow-lg hover:shadow-blue-400 shadow-cyan-500 active:shadow-indigo-500" alt="" width={600} height={600} />
    </Link>
    <p className="mt-6 text-2md">Adventures, across the COZMOZ... {' '}
        <code className="rounded-md p-3 font-mono  text-1md">1/2020<span> ...more</span> {/* TODO more */}
        </code>
    </p>
    <Link href="/002_Book/BookView">
        <button className="mt-2 pb-1 pt-1 px-4 rounded-xl border items-center justify-center text-center border-b-2 border-blue-400  hover:shadow-blue-500 hover:border-indigo-500/50 p-1 text-left text-blue-600 hover:text-indigo-600 active:text-slate-700 shadow-lg shadow-blue-500/50 active:shadow-indigo-500">
            ~OPEN2~</button></Link>
</main>
)}