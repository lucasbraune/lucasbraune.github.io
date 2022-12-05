export type TPost = {
  slug: string;
  title: string;
  date: string;
  body: string;
};

export const getPostUrl = (post: TPost) => `/blog/${post.slug}`;