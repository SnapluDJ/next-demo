import { articles } from "../../../../data";

export default function handler(req, res) {
  // const id = req.query.id;

  console.log(req.query);

  res.status(200).json({ message: "ok" });

  // const article = articles.find((a) => a.id === id);

  // if (article) {
  //   res.status(200).json(article);
  // } else {
  //   res.status(404).json({
  //     message: "not found",
  //   });
  // }
}
