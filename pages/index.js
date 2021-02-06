import ArticleList from "../components/ArticleList";
import { host } from "../config/host";

export default function Home(props) {
  const { articles, products } = props;

  return (
    <div>
      {/* <ArticleList list={articles} /> */}
      {console.log(products)}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${host}/api/articles`);
  const products = await res.json();

  return {
    props: { products },
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
