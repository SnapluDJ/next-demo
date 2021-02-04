import Link from "next/link";

const ArticleItem = (props) => {
  const { article } = props;

  return (
    <Link href={`/article/${article.id}`}>
      <a>
        <h3>{article.title}</h3>
      </a>
    </Link>
  );
};

export default ArticleItem;
