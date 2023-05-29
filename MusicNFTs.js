/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const musicNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(
  _trackTitle,
  _genre,
  _primaryArtist,
  _featuredArtist,
  _composer
) {
  const myMusicNFT = {
    trackTitle: _trackTitle,
    genre: _genre,
    primaryArtist: _primaryArtist,
    featuredArtist: _featuredArtist,
    composer: _composer,
    releaseDate: new Date(),
  };

  musicNFTs.push(myMusicNFT);
  return `Minted: ${myMusicNFT.trackTitle} `;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  let i = 0;

  while (i < musicNFTs.length) {
    console.log(`\nID: ${i + 1}`);
    console.log(`Track Title: ${musicNFTs[i].trackTitle}`);
    console.log(`Genre: ${musicNFTs[i].genre}`);
    console.log(`Primary Artist: ${musicNFTs[i].primaryArtist}`);
    console.log(`Featured Artist: ${musicNFTs[i].featuredArtist}`);
    console.log(`Composer: ${musicNFTs[i].composer}`);
    console.log(`Release Date: ${musicNFTs[i].releaseDate}\n`);
    i++;
  }

  return "Success";
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return musicNFTs.length;
}

// call your functions below this line
setTimeout(() => {
  console.log(
    mintNFT(
      "Firm Foundation",
      "Christian",
      "Marverick City",
      "Chandler Moore",
      "Cody Carnes"
    )
  );
}, 1000);

setTimeout(() => {
  console.log(
    mintNFT(
      "Intentional",
      "Christian",
      "Travis Greene",
      "Travis Greene",
      "Travis Greene"
    )
  );
}, 2000);

setTimeout(() => {
  console.log(
    mintNFT(
      "I'll Find You",
      "Christian hip hop",
      "Lacrea",
      "Tori Kelly",
      "Lacrea"
    )
  );
}, 3000);

setTimeout(() => {
  console.log(
    mintNFT(
      "Reckless Love",
      "Christian",
      "Cory Asbury",
      "Ran Jackson",
      "Caleb Culver"
    )
  );
  listNFTs();
  console.log(`Total Supply: ${getTotalSupply()}`);
}, 4000);
