import Layout from "@components/Layout";
import Post from "@components/Post";
import CategoryList from "@components/CategoryList";
import { getPosts } from "@/lib/posts";
import { PostType } from "types";

const HomePage = ({
    posts,
    categories,
}: {
    posts: PostType[];
    categories: String[];
}) => {
    return (
        <Layout>
            <div>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
            <h3>Categories</h3>
            <CategoryList categories={categories} />
        </Layout>
    );
};

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

export default HomePage;
