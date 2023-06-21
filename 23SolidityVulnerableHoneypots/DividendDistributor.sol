// https://etherscan.io/address/0x858c9eaf3ace37d2bedb4a1eb6b8805ffe801bba


pragma solidity ^0.4.0;

contract Ownable {
  address public owner;
  function Ownable() public {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    if (msg.sender != owner)
        throw;
    _;
  }
  
  modifier protected() {
      if(msg.sender != address(this))
        throw;
      _;
  }

  function transferOwnership(address newOwner) public onlyOwner {
    if (newOwner == address(0))
        throw;
    owner = newOwner;
  }
}

contract DividendDistributorv3 is Ownable{
    event Transfer(
        uint amount,
        bytes32 message,
        address target,
        address currentOwner
    );
    
    struct Investor {
        uint investment;
        uint lastDividend;
    }

    mapping(address => Investor) investors;

    uint public minInvestment;
    uint public sumInvested;
    uint public sumDividend;
    
    function DividendDistributorv3() public{ 
        minInvestment = 0.4 ether;
    }
    
    function loggedTransfer(uint amount, bytes32 message, address target, address currentOwner) protected
    {
        if(! target.call.value(amount)() )
            throw;
        Transfer(amount, message, target, currentOwner);
    }
    
    function invest() public payable {
        if (msg.value >= minInvestment)
        {
            sumInvested += msg.value;
            investors[msg.sender].investment += msg.value;
            // manually call payDividend() before reinvesting, because this resets dividend payments!
            investors[msg.sender].lastDividend = sumDividend;
        }
    }

    function divest(uint amount) public {
        if ( investors[msg.sender].investment == 0 || amount == 0)
            throw;
        // no need to test, this will throw if amount > investment
        investors[msg.sender].investment -= amount;
        sumInvested -= amount; 
        this.loggedTransfer(amount, "", msg.sender, owner);
    }

    function calculateDividend() constant public returns(uint dividend) {
        uint lastDividend = investors[msg.sender].lastDividend;
        if (sumDividend > lastDividend)
            throw;
        // no overflows here, because not that much money will be handled
        dividend = (sumDividend - lastDividend) * investors[msg.sender].investment / sumInvested;
    }
    
    function getInvestment() constant public returns(uint investment) {
        investment = investors[msg.sender].investment;
    }
    
    function payDividend() public {
        uint dividend = calculateDividend();
        if (dividend == 0)
            throw;
        investors[msg.sender].lastDividend = sumDividend;
        this.loggedTransfer(dividend, "Dividend payment", msg.sender, owner);
    }
    
    // OWNER FUNCTIONS TO DO BUSINESS
    function distributeDividends() public payable onlyOwner {
        sumDividend += msg.value;
    }
    
    function doTransfer(address target, uint amount) public onlyOwner {
        this.loggedTransfer(amount, "Owner transfer", target, owner);
    }
    
    function setMinInvestment(uint amount) public onlyOwner {
        minInvestment = amount;
    }
    
    function () public payable onlyOwner {
    }

    function destroy() public onlyOwner {
        selfdestruct(msg.sender);
    }
}