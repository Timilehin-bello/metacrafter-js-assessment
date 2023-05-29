# NFT Management System

This JavaScript code snippet demonstrates a basic NFT (Non-Fungible Token) management system. It includes functions to mint NFTs, list the NFT metadata, and get the total supply of NFTs.

## Code Explanation

The code consists of the following file:

- `MusicNFTs.js`: The JavaScript file containing the code for NFT management.

### NFT Management Functions

1. `mintNFT(_trackTitle, _genre, _primaryArtist, _featuredArtist, _composer)`: This function mints a new NFT by creating an NFT object with the provided metadata. The NFT object is stored in the `musicNFTs` array.

2. `listNFTs()`: This function iterates over the `musicNFTs` array and prints the metadata of each NFT to the console.

3. `getTotalSupply()`: This function returns the total number of NFTs minted by returning the length of the `musicNFTs` array.

### Execution

To execute the code, follow these steps:

1. Open a text editor and create a new file.
2. Copy and paste the contents of `MusicNFTs.js` into the new file.
3. Save the file with a `.js` extension (e.g., `nft.js`).
4. Open a terminal or command prompt and navigate to the directory where you saved the file.
5. Run the JavaScript file using a JavaScript runtime environment or a Node.js command: `node nft.js`.

The code uses `setTimeout` to simulate delays in minting the NFTs. After a certain delay, the minted NFTs' metadata will be printed to the console, along with the total supply of NFTs.

## Contributing

Contributions are welcome! If you have any improvements or suggestions, please open an issue or submit a pull request.

## License

This code is licensed under the MIT License.

## Acknowledgments

This code was created as an assessment solution to demonstrate NFT Collection using JavaScript as a Metacrafter😎.

Feel free to customize and expand upon this code to meet your specific requirements. It serves as a starting point for building more complex NFT management systems or integrating with blockchain technologies.
