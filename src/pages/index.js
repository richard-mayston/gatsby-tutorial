import * as React from "react"
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageHeading="Homepage">
      <p>Home intro</p>
    </Layout>
  )
};

export const Head = () => <title>Home Page</title>

export default IndexPage;