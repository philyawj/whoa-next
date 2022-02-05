import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
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
