import { PostType } from "types";

export const sortByDate = (a: PostType, b: PostType) => {
    return b.frontmatter.date.localeCompare(a.frontmatter.date);
};
