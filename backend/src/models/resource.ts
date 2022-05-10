import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
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
});

export default mongoose.model("Resource", ResourceSchema);
