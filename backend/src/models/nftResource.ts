import mongoose from "mongoose";

const NftResourceSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  updateAuthority: {
    type: String,
    required: true,
  },
  nftName: {
    type: String,
    required: true,
  },
  nftMarketplace: {
    type: String,
    required: true,
  },
  resourceId: {
    type: String,
    required: true,
  },
  verificationType: {
    type: String,
    default: "nft",
  },
});

export default mongoose.model("nft", NftResourceSchema);
