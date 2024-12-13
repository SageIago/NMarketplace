// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import "./counters.sol";
import "hardhat/console.sol";

contract Marketplace is ERC721URIStorage {
    // Add the Contract Logic here
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _tokensSold;

    // This is the minimum price by which things can be listed on the marketplace.
    uint256 listingPrice = 0.00256 ether;

    address payable marketplaceOwner;

    mapping(uint256 => MarketItem) private _marketItemIds;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event _marketItemIdsCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner() {
        require(
            msg.sender == marketplaceOwner,
            "Only The Owner Can Update This Function"
        );
        _;
    }

    constructor() ERC721("NFT Metaverse", "BGNFT") {
        marketplaceOwner = payable(msg.sender);
    }

    // ONLY THE OWNER CAN MODIFY THIS FUNCTIONS
    function updateListingPrice(
        uint256 _listingPrice
    ) public payable onlyOwner {
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    // This is the function for Creating the NFT
    function createToken(
        string memory tokenURI,
        uint256 price
    ) public payable returns (uint256) {
        require(msg.value >= listingPrice, "Must pay listing fee");
        require(price > 0, "Price must be greater than 0");
        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        // Creating the Item on the Marketplace
        createMarketItem(newTokenId, price);

        return newTokenId;
    }

    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be at least 1 wei");
        require(
            msg.value == listingPrice,
            "Price must be equals to listing price"
        );

        _marketItemIds[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);

        emit _marketItemIdsCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    //Resell Tokens
    function resellTokens(
        uint256 tokenId,
        uint256 _updatedPrice
    ) public payable {
        require(
            _marketItemIds[tokenId].owner == msg.sender,
            "Only The Owner can Call this Function"
        );
        require(
            msg.value >= listingPrice,
            "Price must be equal or greater than the listing price"
        );

        _marketItemIds[tokenId].sold = false;
        _marketItemIds[tokenId].price = _updatedPrice;
        _marketItemIds[tokenId].seller = payable(msg.sender);
        _marketItemIds[tokenId].owner = payable(address(this));

        _tokensSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    function createMarketSale(uint256 tokenId) public payable {
        uint256 price = _marketItemIds[tokenId].price;

        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );

        _marketItemIds[tokenId].owner = payable(msg.sender);
        _marketItemIds[tokenId].sold = true;
        _marketItemIds[tokenId].seller = payable(address(0));

        _tokensSold.increment();

        _transfer(address(this), msg.sender, tokenId);

        // Transfer the listing price to the marketplace owner
        payable(marketplaceOwner).transfer(listingPrice);
        // Transfer the rest funds to the seller
        payable(_marketItemIds[tokenId].seller).transfer(msg.value - listingPrice);
    }

    // Get all Unsold NFT Data
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint256 totalItemsCount = _tokenIds.current();
        uint256 unsoldItemsCount = _tokenIds.current() - _tokensSold.current();
        uint256 index = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemsCount);
        for (uint256 i = 0; i < totalItemsCount; i++) {
            if (_marketItemIds[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = _marketItemIds[currentId];
                items[index] = currentItem;
                index += 1;
            }
        }
        return items;
    }

    // In the case you want to fetch all Nft's owned
    function fetchMyNFT() public view returns (MarketItem[] memory) {
        uint256 totalItemsCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint i = 0; i < totalItemsCount; i++) {
            if (_marketItemIds[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint i = 0; i < totalItemsCount; i++) {
            if (_marketItemIds[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = _marketItemIds[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }

    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalItemsCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint i = 0; i < totalItemsCount; i++) {
            if (_marketItemIds[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint i = 0; i < totalItemsCount; i++) {
            if (_marketItemIds[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = _marketItemIds[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }
}
