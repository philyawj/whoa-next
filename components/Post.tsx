import Link from "next/link";

export default function Post({ post }) {
    return (
        <div>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <p>{post.frontmatter.category}</p>
            <p>{post.frontmatter.excerpt}</p>
            <Link href={`/${post.slug}`}>Full Post Link</Link>
            <hr />
        </div>
    );
}
