import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
