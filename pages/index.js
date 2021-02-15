import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Image from "next/image";
import { useRouter } from "next/router";

import ArticleList from "../components/ArticleList";
import { host } from "../config/host";

import parseCookies from "../util/parseCookies";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { products, auth } = props;

  const router = useRouter();

  const [cookie, setCookie] = useCookies(["user"]);

  // if (!auth) {
  //   router.replace("/login");
  // }

  // const [products, setProducts] = useState([]);
  // const [count, addCount] = useState(0);

  // useEffect(async () => {
  //   const res = await fetch(`${host}/products`);
  //   const result = await res.json();
  //   setProducts(result.products);
  // }, [count]);

  useEffect(() => {
    setCookie("name", "dongjie", {
      path: "/",
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    });
  }, []);

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
  console.log(parseCookies(context.req).name);

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

  // const res = await fetch("http://localhost:3000/api/articles?a=1", {
  //   method: "POST",
  //   body: JSON.stringify({ name: "dongjie" }),
  // });

  // setCookie("user", JSON.stringify(data), {
  //   path: "/",
  //   maxAge: 3600, // Expires after 1hr
  //   sameSite: true,
  // });

  const res = await fetch("http://localhost:4000/products", {
    headers: {
      token: "this is token from dongjie",
    },
  });

  const result = await res.json();
  return {
    props: { products: result.products, auth: false },
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
