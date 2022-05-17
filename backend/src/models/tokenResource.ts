import mongoose from "mongoose";

const TokenResourceSchema = new mongoose.Schema({
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
  mintAddress: {
    type: String,
    required: true,
  },
  tokenName: {
    type: String,
    required: true,
  },
  resourceId: {
    type: String,
    required: true,
  },
  verificationType: {
    type: String,
    default: "tkn",
  },
  amount: {
    type: String,
    required: true,
  },
});

export default mongoose.model("token", TokenResourceSchema);
