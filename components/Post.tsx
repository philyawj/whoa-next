import Link from "next/link";

export default function Post({ post }) {
    return (
        <div className="post">
            <h2>{post.frontmatter.title}</h2>
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
}
