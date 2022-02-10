import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "@components/Layout";
import Post from "@components/Post";
import CategoryList from "@components/CategoryList";
import { getPosts } from "@/lib/posts";
import { Params, PostType } from "types";

interface CategoryNameProps {
    category_name: string;
}

const CategoryPage = ({
    posts,
    categoryName,
    categories,
}: {
    posts: PostType[];
    categoryName: string;
    categories: String[];
}) => {
    return (
        <Layout title={categoryName}>
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
};

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

// TODO make functional async
export async function getStaticProps({
    params: { category_name },
}: Params<CategoryNameProps>) {
    const posts = getPosts();

    const categories = posts.map((post) => post.frontmatter.category);
    const uniqueCategories = [...new Set(categories)];

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

export default CategoryPage;
