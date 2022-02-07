import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Layout from "@components/Layout";
import Post from "@components/Post";
import { getPosts } from "@/lib/posts";

export default function CategoryBlogPage({ posts, categoryName }) {
    return (
        <Layout>
            <h1>Posts in category: {categoryName}</h1>
            <div>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>

            <Link href="/blog">Blog Link</Link>
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
    const files = fs.readdirSync(path.join("posts"));

    const posts = getPosts();

    // Filter posts by category
    const categoryPosts = posts.filter(
        (post) => post.frontmatter.category.toLowerCase() === category_name,
    );

    return {
        props: {
            posts: categoryPosts,
            categoryName: category_name,
        },
    };
}
