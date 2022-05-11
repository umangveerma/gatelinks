import axios from "axios";

import constants from "../constants/constants";

interface Token {
  amount: string;
  decimals: number;
  mint_address: string;
  token_address: string;
  ui_amount: number;
}

const getTokens = async (
  address: string,
  mintAddress: string,
  amount: string
) => {
  try {
    let config = {
      headers: {
        "Content-Type": "application/json",
        APIKeyID: constants.blockchainApiKeyId as string,
        APISecretKey: constants.blockchainApiSecretKey as string,
      },
    };
    const network = "mainnet-beta";

    const res = await axios.get(
      `https://api.blockchainapi.com/v1/solana/wallet/${network}/${address}/tokens`,
      config
    );

    const tokenArr = res.data.filter((token: Token) => {
      return token.mint_address === mintAddress;
    });

    const tokenData = tokenArr[0];

    if (!(tokenData["amount"] >= amount)) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    throw err;
  }
};

export default getTokens;
