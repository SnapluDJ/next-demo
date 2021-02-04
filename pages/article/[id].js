import { useRouter } from "next/router";
import Link from "next/link";

const article = (props) => {
  const { article } = props;

  const router = useRouter();

  return (
    <div>
      <div>this is article {router.query.id}</div>
      <p>{article.body}</p>

      <Link href={`/article/${router.query.id}/edit`}>
        <a>click to edit</a>
      </Link>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: { article },
  };
};

export default article;
