import Link from "next/link";

export default function Post({ post }) {
    return (
        <div>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <Link href={`/category/${post.frontmatter.category.toLowerCase()}`}>
                {post.frontmatter.category}
            </Link>
            <p>{post.frontmatter.excerpt}</p>
            <Link href={`/${post.slug}`}>Full Post Link</Link>
            <hr />
        </div>
    );
}
