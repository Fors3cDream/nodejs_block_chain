/**
 * import crypto-js/SHA256 library
 */
const sha256 = require("crypto-js/SHA256");

/**
 * Class with a constructor for block
 */
class Block {
    constructor(data){
        this.id = 0;
        this.nonce = 144444;
        this.body = data;
        this.hash = "";
    }

    /**
     * Step 1. Implement `generateHash()`
     * method that return the `self` block with the hash.
     * 
     * Create a Promise that resolve with `self` after you create
     * the hash of the object and assigned to the hash property `self.hash=...`
     */

    //
    generateHash(){
        // Use this to create a temporary reference of the class object
        let self = this;
        var promise = new Promise(function(resolve, reject){
            // do a thing, possibly async, then...
            // everything turned out fine
            if(self){
                var hash = sha256(JSON.stringify(self));
                self.hash = hash.toString();
                resolve(self);
            } else {
                reject(Error("Wrong block data!"));
            }
        });
        return promise;
    }
}

// Exporting the class Block to be reuse in the other files
module.exports.Block = Block;