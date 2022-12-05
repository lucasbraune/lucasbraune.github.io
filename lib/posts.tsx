import fs from 'fs';
import fm, { FrontMatterResult } from 'front-matter';
import { TPost } from './post';
import path from 'path';

type TAttributes = {
    title: string;
    date: Date;
}

export const getPosts = (): TPost[] => {
    const PATH = 'data/posts';
    return fs.readdirSync(PATH)
        .map((filename: string): TPost => {
            const file: string = fs.readFileSync(PATH + '/' + filename, 'utf-8');
            const content: FrontMatterResult<TAttributes> = fm(file);
            return {
                slug: encodeURI(path.parse(filename).name),
                title: content.attributes.title,
                date: content.attributes.date.toISOString(),
                body: content.body
            };
        });
};

export const getPostsBySlug = (slug: string): TPost | undefined => {
  return getPosts().find(post => post.slug == slug);
};
