import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: [true, "Please input product name"],
    unique: true,
    trim: true,
    maxLength: [40, "no more than 40 charaters"],
  },
  price: { type: Number, required: true },
  productImage: { type: String, required: true },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
