// Create a variable to hold NFTs
let nftCollection = [];

// Function to mint a new NFT
function mintNFT(name, description, image) {
  const nft = {
    name: name,
    description: description,
    image: image
  };
  nftCollection.push(nft);
}

// Function to list all NFTs
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    const nft = nftCollection[i];
    console.log(`Name: ${nft.name}`);
    console.log(`Description: ${nft.description}`);
    console.log(`Image: ${nft.image}`);
    console.log('---'); // separator
  }
}

// Function to get the total supply of NFTs
function getTotalSupply() {
  console.log(`Total NFTs: ${nftCollection.length}`);
}

// Mint some NFTs
mintNFT('NFT 1', 'This is NFT 1', 'image1.png');
mintNFT('NFT 2', 'This is NFT 2', 'image2.png');
mintNFT('NFT 3', 'This is NFT 3', 'image3.png');

// List all NFTs
listNFTs();

// Get the total supply of NFTs
getTotalSupply();
