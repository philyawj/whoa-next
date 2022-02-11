import Head from "next/head";
import React from "react";
import Header from "./Header";
import { prefix } from "../constants";

const Layout = ({
    title = "Whoa Static Site",
    keywords = "whoa, amazing",
    description = "Amazing facts. Whao",
    children,
}: {
    title?: string;
    keywords?: string;
    description?: string;
    children: React.ReactNode;
}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link rel="shortcut icon" href={prefix + "/favicon.ico"} />
            </Head>

            <Header />
            <main className="container">{children}</main>
        </div>
    );
};

export default Layout;
