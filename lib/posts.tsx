import fs from 'fs';
import fm, { FrontMatterResult } from 'front-matter';

type TPost = {
    slug: string;
    title: string;
    date: Date;
    body: string;
};

type TAttributes = {
    title: string;
    date: string;
}

function getPosts(): TPost[] {
    const PATH = '../data/posts';
    return fs.readdirSync(PATH)
        .map((filename: string): TPost => {
            const file: string = fs.readFileSync(PATH + '/' + filename, 'utf-8');
            const content: FrontMatterResult<TAttributes> = fm(file);
            return {
                slug: filename,
                title: content.attributes.title,
                date: new Date(content.attributes.date),
                body: content.body
            };
        });
}

export type { TPost, getPosts };