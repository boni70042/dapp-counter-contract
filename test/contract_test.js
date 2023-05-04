const { expect } = require("chai");

describe("Counter contract", function() {
  let counter;

  beforeEach(async function() {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
  });

  it("should increase count by 1", async function() {
    await counter.inc({ value: ethers.utils.parseEther("0.1") });
    const count = await counter.count();
    expect(count.toNumber()).to.equal(1);
  });

  it("should decrease count by 1", async function() {
    await expect(counter.dec({ value: ethers.utils.parseEther("0.1") }))
      .to.emit(counter, "Decreased")
      .withArgs(1);
    const count = await counter.count();
    expect(count.toNumber()).to.equal(-1);
  });

  it("should revert if not enough fund", async function() {
    await expect(counter.inc({ value: ethers.utils.parseEther("0.05") }))
      .to.be.revertedWith("Not enough fund");
  });
});
