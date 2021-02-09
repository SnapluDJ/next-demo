import React, { useState, useEffect } from "react";
import Image from "next/image";

import ArticleList from "../components/ArticleList";
import { host } from "../config/host";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { products } = props;

  // const [products, setProducts] = useState([]);
  // const [count, addCount] = useState(0);

  // useEffect(async () => {
  //   const res = await fetch(`${host}/products`);
  //   const result = await res.json();
  //   setProducts(result.products);
  // }, [count]);

  const editProductPrice = async (id) => {
    await fetch(`${host}/products/${id}`, { method: "PATCH" });
  };

  return (
    <div>
      {/* <div onClick={() => addCount((prev) => prev + 1)}>{count}</div> */}
      {products.map((p, i) => (
        <div
          className={styles.productName}
          key={i}
          onClick={() => editProductPrice(p._id)}
        >
          {p.name}
        </div>
      ))}

      {/* <Image src="/test.png" width={980} height={720} />

      <Image
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        width={980}
        height={720}
      /> */}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  // const res = await fetch(`${host}/products`);

  // const result = await res.json();

  // console.log(context.query);

  // const r = await fetch("http://localhost:3000/api/articles/", {
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ name: "dongjie" }),
  // });

  const res = await fetch("http://localhost:3000/api/articles?a=1", {
    method: "POST",
    body: JSON.stringify({ name: "dongjie" }),
  });

  const result = await res.json();

  return {
    props: { products: result },
  };

  // return {
  //   props: { products: [] },
  // };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );

//   const articles = await res.json();
//   return {
//     props: { articles },
//   };
// };
