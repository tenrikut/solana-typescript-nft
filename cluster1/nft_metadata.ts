import wallet from "../cluster1/wallet/Turbin3-wallet.json";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createGenericFile,
  createSignerFromKeypair,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";

// Create a devnet connection
const umi = createUmi("https://api.devnet.solana.com");

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader({ address: "https://devnet.irys.xyz/" }));
umi.use(signerIdentity(signer));

(async () => {
  try {
    // Follow this JSON structure
    // https://docs.metaplex.com/programs/token-metadata/changelog/v1.0#json-structure

    const image =
      "https://arweave.net/9MF9PMvvKBLrWZshg7MRQ42hoXUJk5n5WvfcZqvuXKYj";
    const metadata = {
      name: "testRug ",
      symbol: "kut_token",
      description: "our life",
      image: "image",
      attributes: [{ trait_type: "Rarity", value: "Rare" }],
      properties: {
        files: [
          {
            type: "image/png",
            uri: "image",
          },
        ],
      },
      creators: [],
    };
    const myUri = await umi.uploader.uploadJson(metadata);

    console.log("Your metadata URI: ", myUri);
  } catch (error) {
    console.log("Oops.. Something went wrong", error);
  }
})();

/**** 
yarn run v1.22.22
warning ../../../../package.json: No license field
$ ts-node ./cluster1/nft_metadata.ts
Your metadata URI:  https://arweave.net/8A3PRPbxqKg98QVtkUBMpgCjjiR2bWvmi8JQuAxEpxEt
✨  Done in 1.77s.
**/



