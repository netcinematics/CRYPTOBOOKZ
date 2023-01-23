import { useState } from 'react';
import { sculptureList } from '../data/data.js';

export default function GalleryBook({ nfts }) {
  console.log("test3",nfts);
    // sculptureList = nfts;
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
  
    // sculptureList = [{
    //     name: 'Homenaje a la Neurocirugía',
    //     artist: 'Marta Colvin Andrade',
    //     description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    //     url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    //     alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
    //   }, {
    //     name: 'Floralis Genérica',
    //     artist: 'Eduardo Catalano',
    //     description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
    //     url: 'https://i.imgur.com/ZF6s192m.jpg',
    //     alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
    //   }, {
    //     name: 'Eternal Presence',
    //     artist: 'John Woodrow Wilson',
    //     description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
    //     url: 'https://i.imgur.com/aTtVpES.jpg',
    //     alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
    //   }, {
    //     name: 'Moai',
    //     artist: 'Unknown Artist',
    //     description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
    //     url: 'https://i.imgur.com/RCwLEoQm.jpg',
    //     alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
    //   }];


    function handleLastClick() {
        console.log("TEST1",nfts.length,index)
      if(index<1){ setIndex(nfts.length-1)} //loop around index
      else { setIndex(index - 1); }
    }

    function handleNextClick() {
      console.log("TEST2",nfts.length,index)
      if(index >= nfts.length-1){ setIndex(0); } //loop around index        
      else { setIndex(index + 1); }
    }
  
    function handleMoreClick() {
      setShowMore(!showMore);
    }
    let nft = nfts[index];
    // let sculpture = sculptureList[index];
    return (
      <div style={{color:'steelblue'}} className="h-full self-stretch items-stretch">        

{ nfts.length && 
<>
<div className="flex flex-col bg-indigo-800/20 rounded-xl self-center items-center h-full ">

<img className="rounded-xl self-center w-1/2 my-8" src={nft.media[0].gateway} />


        <h2>
          <i>{nft.title} </i>
          {/* <i>{sculpture.name} </i> */}
          by {"spazefalcon"}
          {/* by {sculpture.artist} */}
        </h2>
        <h3>
          ({index + 1} of {nfts.length})
          {/* ({index + 1} of {sculptureList.length}) */}
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{nft.description}</p>}

        </div>

        <button onClick={handleLastClick}>
      Last
    </button>
        <button onClick={handleNextClick}>
          Next
        </button>


    </> 
}

      </div>
    );
  }