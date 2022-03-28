
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

// import "truffle/Console.sol";

contract Voti {
    address public owner;

    uint public userCount;

    mapping (address => User) public users;

    mapping (uint => Campaign) public campaigns;

    enum State {
        Created,
        Approved,
        Open,
        Closed,
        Collated
    }

    struct User {
        uint id;
        address user;
        bool voted;
        uint campaignId;
    }

    struct Campaign {
        uint id;
        string name;
        uint timestamp;
        State state;
        uint voteCount;
        // address owner;
    }


    modifer isOwner() {}

    modifier isRegistered() {
        require(users[msg.sender].address == msg.sender, 'address not registered');
        _;
    }

    modifier onlyVoteOnce() {}

    modifier campaignExist() {}


    constructor() {
        owner = msg.sender;
    }



    function registerVoter() public returns (User) {
        // require(users[msg.sender].address == address(0), 'address already registered');

        // users[msg.sender] = User({
        //     id: userCount,
        //     user: msg.sender 
        // });

        // return users[msg.sender];
    }

    // function submitCampaign(string _name) public isRegistered returns (Campaign) {}

    // function approveCampaign() private isOwner {}

    function registerVote(unit _campaignId) public campaignExist onlyVoteOnce {}

    function collate() internal isOwner {}

    function getWinner() public {}
}
