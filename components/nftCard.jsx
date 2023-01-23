import dynamic from "next/dynamic"

export const NFTCard = ({ nft }) => {

    const textToCopy = "0x134..skj"
    const CC = dynamic(() => import("../components/copyClipboard").then(mod => mod.CopyClipboard), { ssr: false })
   

    return (

        <div className="flex flex-col w-full h-full rounded-md justify-between bg-zinc-800">{/*CARD-FRAME*/}
            <header className="flex justify-between h-200 bg-sky-500 rounded-lg p-1 pl-2">
                    <h2 className="text-lg align-left rounded-md text-gray-800">{nft.title}</h2>
                    <p className="text-gray-600 align-center ">&nbsp;</p>
                    <div>{/*icon*/}
                        <CC content={textToCopy} />
                    </div>
                    {/* <p className="text-gray-600" >{nft.contract.address}</p> */}
            </header>
            <main className="flex mt-1 mx-1 mb-auto bg-zinc-800">{/*CARD-CONTENT-FRAME*/}{/* overflow-auto */}
                <div className="flex flex-col bg-indigo-500 rounded-md"> {/*  self-stretch */}
                    <div className="rounded-md p-1">
                        <img className="object-cover shadow-md h-128 w-full rounded-md" src={nft.media[0].gateway} ></img>
                    </div>
                    <div className="flex flex-col m-1 y-gap-2 px-2 py-3 shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md h-110 ">
                        {/* <div className="bg-sky-500 rounded-md overflow-hidden ">
                            <h2 className="text-xl text-gray-800">{nft.title}</h2>
                            <p className="text-gray-600">Id: {nft.id.tokenId}</p>
                            <p className="text-gray-600" >{nft.contract.address}</p>
                        </div> */}

                        <div className="flex-grow mt-1 bg-black">
                            <p className="text-gray-500 p-3 rounded-md scroll-smooth overflow-hidden">{nft.description}</p>
                        </div>
                    </div>

                </div>
            </main>
        <footer className="h-8 m-1 p-1 text-sm bg-blue-500 rounded-md bg-blue-500">Footer</footer>
    </div>

    )
}


export default NFTCard