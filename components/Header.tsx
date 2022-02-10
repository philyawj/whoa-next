import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
