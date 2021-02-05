import { useRouter } from "next/router";
import Link from "next/link";

const article = (props) => {
  const { article } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div>this is article {router.query.id}</div>
      <p>{article.body}</p>

      <Link href="/">back</Link>

      <br />

      <Link href={`/article/${router.query.id}/edit`}>
        <a>click to edit</a>
      </Link>
    </div>
  );
};

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: { article },
//   };
// };

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );

  const articles = await res.json();

  return {
    paths: articles.map((a) => `/article/${a.id}`),
    // paths: articles.map((a) => ({
    //   params: { id: a.id.toString() },
    // })),
    fallback: false,
    // fallback: false // will show 404 not found
  };
};

export default article;
