import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGO_URI}` || "").catch((err) => {
    if (err) console.error(err);
  });

  console.log(`MongoDB Connected`);
};

module.exports = connectDB;
