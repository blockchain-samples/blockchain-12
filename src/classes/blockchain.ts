import { Block } from './block';

export class Blockchain{

    private chain : Array<Block> = [];
    private miningDificulty = 3;

    public constructor(){

    }

    public addBlock(block : Block){
        block.mineBlock(this.miningDificulty);
        this.chain.push(block);
    }

    public startChain() : void{
        if(this.getChainLength() === 0){
            this.addBlock(new Block({type: "Genesis"}, ''));
        }
    }

    public getFullChain() : Array<Block>{
        return this.chain;
    }

    public getLatestBlock() : Block{
        return this.chain[this.chain.length - 1];
    }

    public getLatestBlockHash() : string{
        return this.chain[this.chain.length - 1].getHash();
    }

    public getChainLength() : number{
        return this.chain.length;
    }

    public isChainValid() : boolean{
        let valid = true;
        this.chain.forEach((block, index, array) => {

            if(index === 0 ){
                return;
            }

            if(block.getHash() !== block.calculateHash()){
                valid = false;
            }

            if(block.getPrevious() !== array[index - 1].getHash()){
                valid = false;
            }

        });
        return valid;
    }
}