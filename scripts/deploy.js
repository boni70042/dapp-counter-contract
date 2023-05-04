const { ethers } = require("hardhat");

async function main() {
const Counter = await ethers.getContractFactory("Counter");
const counter = await Counter.deploy();
// const  counter = await Counter.attach("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9")

console.log("Counter deployed to:", counter.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
console.error(error);
process.exit(1);
});