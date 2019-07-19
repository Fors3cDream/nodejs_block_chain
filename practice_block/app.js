/**
 * importing the Block class
 */

 //
 const BlockClass = require("./block.js");

 /**
  * Creating a block object
  */
 const block = new BlockClass.Block("Test Block");

 // Generating the block hash
 console.log("Start to get block hash!");
 block.generateHash().then((result)=>{
     console.log(`Block Hash: ${result.hash}`);
     console.log(`Block: ${JSON.stringify(result)}`);
 }).catch((error) => { console.log(error)});

 /**
  * Step3 Run the application in node.js
  */