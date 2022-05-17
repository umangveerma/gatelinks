import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

const getTokens = async (walletAddress: string) => {
  const tokens: any[] = [];

  const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

  const owner = new PublicKey(walletAddress);

  let response = await connection.getParsedTokenAccountsByOwner(owner, {
    programId: TOKEN_PROGRAM_ID,
  });

  response.value.forEach((accountInfo) => {
    tokens.push({
      mintAddress: accountInfo.account.data["parsed"]["info"]["mint"],
      amount:
        accountInfo.account.data["parsed"]["info"]["tokenAmount"]["amount"],
    });
  });

  return tokens;
};

export default getTokens;
