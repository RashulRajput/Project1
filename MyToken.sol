// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MyToken {
    /**
     * @dev Token information
     */
    string public constant tokenName = "My token";
    string public constant tokenAbbrv = "MTA";

    /**
     * @dev Total supply of tokens
     */
    uint public totalSupply;

    /**
     * @dev Mapping of token balances
     */
    mapping(address => uint) public balances;

    /**
     * @dev Mint new tokens
     * @param _address The address to mint tokens to
     * @param _value The amount of tokens to mint
     */
    function mint(address _address, uint _value) public {
        totalSupply += _value;
        balances[_address] += _value;
    }

    /**
     * @dev Burn tokens
     * @param _address The address to burn tokens from
     * @param _value The amount of tokens to burn
     */
    function burn(address _address, uint _value) public {
        require(balances[_address] >= _value, "Insufficient balance");
        totalSupply -= _value;
        balances[_address] -= _value;
    }
}
