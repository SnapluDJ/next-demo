import React, { useState, useEffect } from "react";

import ArticleList from "../components/ArticleList";
import { host } from "../config/host";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  // const { products } = props;

  const [products, setProducts] = useState([]);
  const [count, addCount] = useState(0);

  useEffect(async () => {
    const res = await fetch(`${host}/products`);

    const result = await res.json();

    setProducts(result.products);
  }, [count]);

  const editProductPrice = async (id) => {
    await fetch(`${host}/products/${id}`, { method: "PATCH" });
  };

  return (
    <div>
      <div onClick={() => addCount((prev) => prev + 1)}>{count}</div>
      {products.map((p, i) => (
        <div
          className={styles.productName}
          key={i}
          onClick={() => editProductPrice(p._id)}
        >
          {p.name}
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  // const res = await fetch(`${host}/products`);

  // const result = await res.json();

  const r = await fetch("http://localhost:3000/api/articles/", {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ name: "dongjie" }),
  });

  // return {
  //   props: { products: result.products },
  // };

  return {
    props: { products: [] },
  };
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
