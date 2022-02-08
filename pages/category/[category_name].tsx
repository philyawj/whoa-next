import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "@components/Layout";
import Post from "@components/Post";
import CategoryList from "@components/CategoryList";
import { getPosts } from "@/lib/posts";

export default function CategoryBlogPage({ posts, categoryName, categories }) {
    return (
        <Layout>
            <h1>Category: {categoryName}</h1>
            <div>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
            <h3>Categories</h3>
            <CategoryList categories={categories} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("posts"));

    const categories = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join("posts", filename),
            "utf-8",
        );

        const { data: frontmatter } = matter(markdownWithMeta);

        return frontmatter.category.toLowerCase();
    });

    const paths = categories.map((category) => ({
        params: { category_name: category },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { category_name } }) {
    const posts = getPosts();

    // categories for sidebar
    const categories = posts.map((post) => post.frontmatter.category);
    const uniqueCategories = [...new Set(categories)];

    // Filter posts by category
    const categoryPosts = posts.filter(
        (post) => post.frontmatter.category.toLowerCase() === category_name,
    );

    return {
        props: {
            posts: categoryPosts,
            categoryName: category_name,
            categories: uniqueCategories,
        },
    };
}
