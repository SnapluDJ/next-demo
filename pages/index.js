import ArticleList from "../components/ArticleList";
import { host } from "../config/host";

export default function Home(props) {
  const { articles } = props;

  return (
    <div>
      <ArticleList list={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${host}/api/articles`);

  const articles = await res.json();
  return {
    props: { articles },
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
