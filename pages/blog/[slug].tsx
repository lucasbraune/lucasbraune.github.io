import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { TPost } from "../../lib/post";
import { getPosts, getPostsBySlug } from "../../lib/posts";

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
  const post = context.params ? getPostsBySlug(context.params.slug) : undefined;
  return post ? { props: { post } } : { notFound: true };
};

const Post: FC<TProps> = ({ post }) => (
  <article className='prose'>
    <h1>{post.title}</h1>
    {post.body}
    <Link href="/">Home</Link>
  </article>
);

export default Post;