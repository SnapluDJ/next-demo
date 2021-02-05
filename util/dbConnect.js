import mongoose from "mongoose";

const dbConnect = async () => {
  return mongoose
    .connect(
      "mongodb://dongjie:" +
        process.env.MONGO_ATLAS_PWD +
        "@node-rest-shop-shard-00-00.lecma.mongodb.net:27017,node-rest-shop-shard-00-01.lecma.mongodb.net:27017,node-rest-shop-shard-00-02.lecma.mongodb.net:27017/test?ssl=true&replicaSet=atlas-6hr3vc-shard-0&authSource=admin&retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .catch((err) => console.log(err));
};

export default dbConnect;
