import {
  Commitment,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import wallet from "../cluster1/wallet/Turbin3-wallet.json";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
const mint = new PublicKey("8UYcm9rvaf16aFna2CuhShTXo4hHdTTrbNQnFTxJY1nQ");

// Recipient address
const to = new PublicKey("8512c8XggAJ8Ano446uk3UV9bnddSNpNdL4r6g5sT1YX");

(async () => {
  try {
    // Get the token account of the from Wallet address, and if it does not exist, create it
    const from_ata = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey
    );
    const to_ata = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      to
    );
    const tx = await transfer(
      connection,
      keypair,
      from_ata.address,
      to_ata.address,
      keypair,
      1
    );

    // Get the token account of the toWallet address, and if it does not exist, create it
    // Transfer the new token to the "toTokenAccount" we just created
    console.log(`your transfer txid: ${tx}`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
