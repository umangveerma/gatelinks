import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner,
} from "@nfteyez/sol-rayz";
import * as web3 from "@solana/web3.js";

const getNfts = async (address: string) => {
  const nfts: string[] = [];

  const connection = new web3.Connection(
    web3.clusterApiUrl("mainnet-beta"),
    "confirmed"
  );

  const publicAddress = await resolveToWalletAddress({
    text: address,
  });

  const nftArray = await getParsedNftAccountsByOwner({
    publicAddress,
    connection,
  });

  nftArray.forEach((nft) => {
    nfts.push(nft.updateAuthority);
  });

  return nfts;
};

export default getNfts;
