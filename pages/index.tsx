import Link from "next/link";
import Layout from "@components/Layout";
import Post from "@components/Post";
import { getPosts } from "@/lib/posts";

export default function Home({ posts }) {
    return (
        <Layout>
            <h1>Latest Posts</h1>
            <div>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            posts: getPosts().slice(0, 6),
        },
    };
}
