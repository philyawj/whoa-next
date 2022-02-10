import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Layout from "@components/Layout";
import { Frontmatter, Params } from "types";

interface PostPageProps {
    frontmatter: Frontmatter;
    content: string;
}

interface SlugProps {
    slug: string;
}

const PostPage = ({
    frontmatter: { title, category, date, cover_image, cover_image_alt },
    content,
}: PostPageProps) => {
    return (
        <Layout title={title}>
            <h1>{title}</h1>
            <img
                src={cover_image}
                width={640}
                className="responsive"
                alt={cover_image_alt}
            />
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            <p>
                Category:{" "}
                <Link href={`/category/${category.toLowerCase()}`}>
                    {category}
                </Link>
            </p>
            <p>Posted: {date}</p>
            <Link href="/">Go Back Home</Link>
        </Layout>
    );
};

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("posts"));

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }: Params<SlugProps>) {
    const markdownWithMeta = fs.readFileSync(
        path.join("posts", slug + ".md"),
        "utf-8",
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default PostPage;
