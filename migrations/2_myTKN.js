const myTKN = artifacts.require("GovInCoin");
//govincoin is the name of the contract
//myTKN is the name of the solidity file 

module.exports = function (deployer) {
  deployer.deploy(myTKN);
};
