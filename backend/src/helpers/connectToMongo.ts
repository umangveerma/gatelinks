import mongoose from "mongoose";

import constants from "../constants/constants";

const connectToMongo = async () => {
  try {
    mongoose.connect(constants.mongoDbConnectionUrl as string, {
      ssl: true,
    });
    console.log("[📦] Connected to MongoDB");
  } catch (error) {
    console.log("[📦] Error while connecting to MongoDB");
    console.error(error);
  }
};

export default connectToMongo;
