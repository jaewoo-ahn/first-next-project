import {useRouter} from "next/router";

function Detail() {
  const router = useRouter();

  const newsID = router.query.newsID;

  return <h1>MyDetail Page</h1>;
}

export default Detail;
