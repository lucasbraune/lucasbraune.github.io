import Link from "next/link";
import { FC } from "react";
import { getPostUrl, TPost } from "../lib/post";
import { getPosts } from "../lib/posts";

type TProps = {
  posts: TPost[]
}

export const getStaticProps = (): { props: TProps } => (
  {
    props: {
      posts: getPosts()
    }
  }
);

const Home: FC<TProps> = ({ posts }) => (
  <div className="prose">
    <h1>Hello, world</h1>
    <ul>
      {posts.map(post =>
        <li key={post.slug}>
          <Link href={getPostUrl(post)}>{post.title}</Link>
        </li>
      )}
    </ul>
  </div>
);

export default Home;
