import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { TPost } from "../../lib/post";
import { getPosts, getPostsBySlug } from "../../lib/posts";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<IParams> = () => {
  const paths = getPosts().map(post => ({
    params: { slug: post.slug }
  }));
  return {
    paths,
    fallback: false
  };
};

type TProps = {
  post: TPost
}

export const getStaticProps: GetStaticProps<TProps, IParams> = (context) => {
  const post = context.params ?
    getPostsBySlug(context.params.slug) :
    undefined;
  return post ?
    { props: { post } } :
    { notFound: true };
};

const Post: FC<TProps> = ({ post }) => (
  <article className='prose mx-auto'>
    <h1 className="text-5xl">{post.title}</h1>
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {post.body}
    </ReactMarkdown>
    <Link href="/">Home</Link>
  </article>
);

export default Post;