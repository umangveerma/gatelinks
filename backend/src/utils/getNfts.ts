import axios from "axios";

import constants from "../constants/constants";

const getNfts = async (walletAddress: string) => {
  try {
    let config = {
      headers: {
        "Content-Type": "application/json",
        APIKeyID: constants.blockchainApiKeyId as string,
        APISecretKey: constants.blockchainApiSecretKey as string,
      },
    };
    const network = "devnet";

    const res = await axios.get(
      `https://api.blockchainapi.com/v1/solana/wallet/${network}/${walletAddress}/nfts`,
      config
    );

    return res.data.nfts_owned;
  } catch (err) {
    throw err;
  }
};

export default getNfts;
