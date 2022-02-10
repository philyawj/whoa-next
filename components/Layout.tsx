import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({
    title,
    keywords,
    description,
    children,
}: {
    title: string;
    keywords: string;
    description: string;
    children: React.ReactNode;
}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                {/* TODO favi */}
            </Head>

            <Header />
            <main className="container">{children}</main>
        </div>
    );
};

Layout.defaultProps = {
    title: "Welcome to Whoa",
    keywords: "whoa, amazing",
    description: "Amazing facts",
};

export default Layout;
