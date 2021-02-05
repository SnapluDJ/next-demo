import { articles } from "../../../data";
import dbConnect from "../../../util/dbConnect";
// import Proudct from "../../../models/product";

export default async function handler(req, res) {
  // await dbConnect();

  // try {
  //   const products = await Proudct.find();
  //   res.status(200).json(products);
  // } catch (err) {
  //   res.status(400).json(err);
  // }

  res.status(200).json(articles);
}
