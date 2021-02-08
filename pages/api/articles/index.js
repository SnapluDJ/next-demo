import dbConnect from "../../../util/dbConnect";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  // console.log(req.body);

  // res.status(200).json({ message: "ok" });

  await dbConnect();

  try {
    const result = await Product.find();

    // const products = result.map((doc) => doc.toObject());

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}
