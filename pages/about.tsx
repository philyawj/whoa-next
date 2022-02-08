import Layout from "@components/Layout";

export default function AboutPage() {
    return (
        <Layout title="About Whoa">
            <h1>About</h1>

            <div>
                <p>
                    This is a static site about random interesting things built
                    with Next.js and Markdown.
                </p>

                <img src="/images/whoa.gif" alt="" />
            </div>
        </Layout>
    );
}
