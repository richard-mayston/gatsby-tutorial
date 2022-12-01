import * as React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
    console.log(data);
    return (
        <Layout pageHeading="Blog">
            <p>Blog intro</p>
            <ul>
                {data.allFile.nodes.map(node => {
                    return <li key={node.id}>{node.name}</li>
                })}
            </ul>
        </Layout>
    )
};

export const Head = () => <title>Blog</title>

export const query = graphql`
    query BlogData {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        nodes {
            name
            id
        }
        }
    }
`;

export default BlogPage;