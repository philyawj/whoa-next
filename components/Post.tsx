import Link from "next/link";
import { PostType } from "types";

const prefix = "/whoa-next";

const Post = ({ post }: { post: PostType }) => {
    return (
        <div className="post">
            <h2>
                <Link href={`/${post.slug}`}>{post.frontmatter.title}</Link>
            </h2>
            <img
                src={prefix + post.frontmatter.cover_image}
                width={400}
                className="responsive"
                alt={post.frontmatter.cover_image_alt}
            />
            <p>{post.frontmatter.excerpt}</p>
            <p>
                Category:{" "}
                <Link
                    href={`/category/${post.frontmatter.category.toLowerCase()}`}
                >
                    {post.frontmatter.category}
                </Link>
            </p>
            <p>Posted: {post.frontmatter.date}</p>
            <Link href={`/${post.slug}`}>Full Post</Link>
        </div>
    );
};

export default Post;
