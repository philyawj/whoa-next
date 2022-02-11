import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "@/utils/index";
import { PostWithFrontmatterKeys } from "types";

const files = fs.readdirSync(path.join("posts"));

export const getPosts = () => {
    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");

        const markdownWithMeta = fs.readFileSync(
            path.join("posts", filename),
            "utf-8",
        );

        const { data: frontmatter } = matter(markdownWithMeta);

        return {
            slug,
            frontmatter,
        };
    });

    return posts.sort(sortByDate);
};

export const getUniqueCategories = (posts: PostWithFrontmatterKeys[]) => {
    const categories = posts.map((post) => post.frontmatter.category);
    return [...new Set(categories)];
};
