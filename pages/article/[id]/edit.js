import { useRouter } from "next/router";

const edit = () => {
  const router = useRouter();

  return <div>edit article {router.query.id}</div>;
};

export default edit;
