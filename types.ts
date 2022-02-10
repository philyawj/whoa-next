export interface PostType {
    slug: string;
    frontmatter: {
        [key: string]: any; // TODO update
    };
}

export interface Params<T> {
    params: T;
}
