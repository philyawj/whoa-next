import Link from "next/link";
import Layout from "@components/Layout";
import Post from "@components/Post";
import CategoryList from "@components/CategoryList";
import { getPosts } from "@/lib/posts";

export default function Home({ posts, categories }) {
    return (
        <Layout>
            <h1>Latest Posts</h1>
            <h2>Posts</h2>
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

export async function getStaticProps() {
    const posts = getPosts();

    // categories for sidebar
    const categories = posts.map((post) => post.frontmatter.category);
    const uniqueCategories = [...new Set(categories)];

    console.log(uniqueCategories);

    return {
        props: {
            posts: posts.slice(0, 6),
            categories: uniqueCategories,
        },
    };
}
