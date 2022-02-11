import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "@components/Layout";
import Post from "@components/Post";
import CategoryList from "@components/CategoryList";
import { getPosts, getUniqueCategories } from "@/lib/posts";
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

export const getStaticPaths = async () => {
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
};

export const getStaticProps = async ({
    params: { category_name },
}: Params<CategoryNameProps>) => {
    const posts = getPosts();

    const uniqueCategories = getUniqueCategories(posts);

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
};

export default CategoryPage;
