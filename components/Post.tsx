import Link from "next/link";

export default function Post({ post }) {
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <p>{post.frontmatter.category}</p>
            <p>{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>Full Post Link</Link>
            <img src={post.frontmatter.author_image} alt="" />
            <hr />
        </div>
    );
}
