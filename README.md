# Solana TypeScript NFT

Generate your own NFT in Solana with this TypeScript code.

## Overview

This project provides a straightforward way to create and manage NFTs on the Solana blockchain using TypeScript. It includes scripts and utilities to help you deploy your own NFT smart contracts and interact with them.

## Features

- Create and deploy NFTs on the Solana blockchain.
- Written entirely in TypeScript.
- Easy to use and customize.

## Requirements

- Node.js (>= 14.x)
- Yarn or npm
- A Solana wallet
- Devnet or Mainnet access

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/tenrikut/solana-typescript-nft.git
    cd solana-typescript-nft
    ```

2. Install dependencies:

    ```sh
    yarn install
    # OR
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add your Solana wallet private key and other configurations:

    ```sh
    SOLANA_WALLET_PRIVATE_KEY=<your-private-key>
    SOLANA_NETWORK=https://api.devnet.solana.com
    ```

2. Customize the `config.ts` file to set up your NFT properties.

## Usage

### Creating an NFT

1. Run the script to create an NFT:

    ```sh
    yarn create-nft
    # OR
    npm run create-nft
    ```

### Viewing the NFT

1. Run the script to view the NFT details:

    ```sh
    yarn view-nft
    # OR
    npm run view-nft
    ```

## Scripts

- `create-nft`: Script to create a new NFT.
- `view-nft`: Script to view an existing NFT.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [Solana](https://solana.com/)
- [Metaplex](https://www.metaplex.com/)
