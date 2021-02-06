import dbConnect from "../../../util/dbConnect";
import Product from "../../../models/product";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const result = await Product.find();

    const products = result.map((doc) => doc.toObject());

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
}
