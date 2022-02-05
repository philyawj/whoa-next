import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFoundPage() {
    return (
        <Layout title="Page Not Found">
            <div>
                <h1>Whoops!</h1>

                <h2>This page does not exist</h2>
            </div>
        </Layout>
    );
}
