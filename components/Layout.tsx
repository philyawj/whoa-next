import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                {/* TODO favi */}
            </Head>

            <Header />
            <main>{children}</main>
        </div>
    );
}

Layout.defaultProps = {
    title: "Welcome to Whoa",
    keywords: "whoa, amazing",
    description: "Amazing facts",
};
