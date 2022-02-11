import { PostWithFrontmatterKeys } from "types";

export const sortByDate = (
    a: PostWithFrontmatterKeys,
    b: PostWithFrontmatterKeys,
) => {
    return b.frontmatter.date.localeCompare(a.frontmatter.date);
};
