import Layout from "../components/Layout";

export default function AboutPage() {
    return (
        <Layout title="About Whoa">
            <h1>About</h1>

            <div>
                <h3>Whoa - Next</h3>

                <p className="mb-3">
                    This is a site built with Next.js and Markdown.
                </p>
            </div>
        </Layout>
    );
}
