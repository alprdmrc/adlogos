import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="AD LOGOS">
      <p>Coming Soon!</p>
      <StaticImage alt="Efes" src='../images/background-efes.jpg' />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage