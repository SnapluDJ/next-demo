import mongoose from "mongoose";

import dbConnect from "../../../../util/dbConnect";
import Product from "../../../../models/Product";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const id = req.query.id;

    const result = await Product.updateOne(
      { _id: id },
      { price: Math.random().toFixed(2) * 100 }
    );

    console.log(result);

    res.status(200).json();
  } catch (err) {
    res.status(500).json(err);
  }
}
