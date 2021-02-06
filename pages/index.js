import ArticleList from "../components/ArticleList";
import { host } from "../config/host";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { products } = props;

  const editProductPrice = async (id) => {
    await fetch(`${host}/products/${id}`, { method: "PATCH" });
  };

  return (
    <div>
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
  const res = await fetch(`${host}/products`);

  const result = await res.json();

  return {
    props: { products: result.products },
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
