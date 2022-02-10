import Layout from "@components/Layout";
import Post from "@components/Post";
import CategoryList from "@components/CategoryList";
import { getPosts } from "@/lib/posts";

interface Post {
    slug: string;
    frontmatter: {
        [key: string]: any;
    };
}

export default function Home({
    posts,
    categories,
}: {
    posts: Post[];
    categories: [];
}) {
    return (
        <Layout>
            <div>
                {posts.map((post, index: number) => (
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

    const categories = posts.map((post) => post.frontmatter.category);
    const uniqueCategories = [...new Set(categories)];

    return {
        props: {
            posts: posts,
            categories: uniqueCategories,
        },
    };
}
