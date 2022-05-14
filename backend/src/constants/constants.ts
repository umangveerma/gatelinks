import dotenv from "dotenv";

dotenv.config();

const constants = {
  blockchainApiSecretKey: process.env.BLOCKCHAINAPI_SECRET_KEY,
  blockchainApiKeyId: process.env.BLOCKCHAINAPI_KEY_ID,
  mongoDbConnectionUrl: process.env.MONGODB_CONNECTION_URL,
  verificationTypes: ["nft", "tkn"],
};

export default constants;
