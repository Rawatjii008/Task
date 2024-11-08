import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB", conn.connection.host);
    return conn;
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
