const stakingAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
const rewardTokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

const stakingAbi = require("./stakingAbi.json")
const rewardTokenAbi = require("./rewardTokenAbi.json")

module.exports = {
    stakingAbi,
    rewardTokenAbi,
    stakingAddress,
    rewardTokenAddress,
}
