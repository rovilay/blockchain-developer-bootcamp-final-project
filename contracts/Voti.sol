
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

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


    modifier isOwner() {
        _;
    }

    modifier isRegistered() {
        require(users[msg.sender].user == msg.sender, 'address not registered');
        _;
    }

    modifier onlyVoteOnce() {
        _;
    }

    modifier campaignExist() {
        _;
    }


    constructor() {
        owner = msg.sender;
    }



    function registerVoter() public returns (User memory) {
      require(users[msg.sender].user == address(0), 'address already registered');
      
      userCount += 1;

      users[msg.sender] = User({
        id: userCount,
        user: msg.sender,
        voted: false,
        campaignId: 0
      });


      return users[msg.sender];
    }

    // function submitCampaign(string _name) public isRegistered returns (Campaign) {}

    // function approveCampaign() private isOwner {}

    function registerVote(uint _campaignId) public campaignExist onlyVoteOnce {}

    function collate() internal isOwner {}

    function getWinner() public {}
}
