import { PostToSort } from "types";

export const sortByDate = (a: PostToSort, b: PostToSort) => {
    return b.frontmatter.date.localeCompare(a.frontmatter.date);
};
