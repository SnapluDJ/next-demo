import ArticleItem from "./ArticleItem";

const ArticleList = (props) => {
  const { list } = props;

  return (
    <div>
      {list.map((a, i) => (
        <ArticleItem article={a} key={i} />
      ))}
    </div>
  );
};

export default ArticleList;
