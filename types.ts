export interface PostType {
    slug: string;
    frontmatter: Frontmatter;
}

export interface Frontmatter {
    category: string;
    cover_image_alt: string;
    cover_image: string;
    date: string;
    excerpt: string;
    title: string;
}

export interface PostWithFrontmatterKeys {
    slug: string;
    frontmatter: {
        [key: string]: any;
    };
}

export interface Params<T> {
    params: T;
}
