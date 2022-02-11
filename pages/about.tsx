import Layout from "@components/Layout";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const AboutPage = () => {
    return (
        <Layout title="About Whoa">
            <h1>About</h1>
            <div>
                <p>
                    This is a static site about random interesting things built
                    with Next.js and Markdown.
                </p>

                <img
                    src={prefix + "/images/whoa.png"}
                    alt="whoa neo"
                    className="responsive"
                />
            </div>
        </Layout>
    );
};

export default AboutPage;
