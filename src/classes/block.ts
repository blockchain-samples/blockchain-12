import { SHA256 } from "crypto-js";

export class Block{
    private hash      : string;
    private timestamp : number;
    private data      : object;
    private previous  : string;
    private nonce     : number;

    constructor(data : object, previous : string){
        this.timestamp = Date.now();
        this.data      = data;
        this.previous  = previous;
        this.nonce     = 0;
        this.setHash(this.calculateHash());
    }

    public calculateHash() : string{
        return SHA256(
            this.timestamp.toString() +
            JSON.stringify(this.data) +
            this.previous             +
            this.nonce
        ).toString();
    }

    public mineBlock(miningDificulty : number) {
        while(this.getHash().substring(0, miningDificulty) !== Array(miningDificulty + 1).join('0')){
            this.increaseNonce();
            this.setHash(this.calculateHash());
        }
    }

    private increaseNonce() : void {
        this.nonce++;
    }

    public getData(){
        return this.data;
    }

    public getJsonData(){
        return JSON.stringify(this.data);
    }

    public getTimeStamp(){
        return this.timestamp;
    }

    public getISOTimeStamp(){
        return new Date(this.timestamp).toISOString();
    }

    public getHash(){
        return this.hash;
    }

    private setHash(hash : string) : void{
        this.hash = hash;
    }

    public getPrevious(){
        return this.previous;
    }

    public setPrevious(previous : string){
        this.previous = previous;
    }

    public toString() : string {
        let result = ``;
        for(let property in this){
            result +=
            `
            ${property}: ${this[property]}`;
        }
        return result;
    }

}


