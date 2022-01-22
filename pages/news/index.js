//our-domain.com/news/something-important
import Link from "next/link";
import {Fragment} from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <Link href="/news/nextjs-is-a-great-framework">
          <li>NextJS is A Great FrameWork</li>
        </Link>
        <li>SomeThing Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
