import mongoose from "mongoose";

export const connectToDb = async (url) => {
  return await mongoose.connect(url);
};
