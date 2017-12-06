import { Block } from "./classes/block";
import { Blockchain } from './classes/blockchain';

let chain = new Blockchain();

chain.startChain();

// let b  = ;
chain.addBlock(new Block({
    name: "James M. Larson",
    email: "jlarson@mybusiness.com"
}, chain.getLatestBlockHash()));

chain.addBlock(new Block({
    name: "Brian L. Bohrer",
    email: "brian.bohrer@gmai.com"
}, chain.getLatestBlockHash()));

chain.getFullChain().forEach((element, index) =>{
    console.log(`${index} - ${element.toString()}`);
});

// console.log(`Valid Chain ${chain.isChainValid()}`);