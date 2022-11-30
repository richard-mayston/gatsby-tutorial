import * as React from "react"
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageHeading="Homepage">
      <p>Home intro</p>
      <StaticImage src="../images/icon.png" placeholder="blurred"
        layout="fixed"
        width={200}
        height={200} alt="logo" />
      <StaticImage src="https://s3.amazonaws.com/com.mirrorproject.photos/2001/12/01/3040-15065.jpg" alt="Me" />
    </Layout>
  )
};

export const Head = () => <title>Home Page</title>

export default IndexPage;