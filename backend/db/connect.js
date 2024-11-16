import mongoose from "mongoose";

export const connectToDb = async (url) => {
  return mongoose.connect(url);
};
