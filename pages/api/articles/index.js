import dbConnect from "../../../util/dbConnect";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  // console.log(req.body);

  // res.status(200).json({ message: "ok" });

  console.log(req.body);

  await dbConnect();

  try {
    const result = await Product.find();

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
}
