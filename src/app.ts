import { Block } from "./classes/block";
import { Blockchain } from './classes/blockchain';



let chain = new Blockchain();

chain.startChain();

// let b  = ;
chain.addBlock(new Block({
    name: "Rodrigo",
    email: "rodrigo.kammer@gmail.com"
}, chain.getLatestBlockHash()));

chain.addBlock(new Block({
    name: "Rebekah",
    email: "rebekah_am@yahoo.com"
}, chain.getLatestBlockHash()));

chain.getFullChain().forEach((element, index) =>{
    console.log(`${index} - ${element.toString()}`);
});

// console.log(`Valid Chain ${chain.isChainValid()}`);