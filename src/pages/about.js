import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allAirtable {
        edges {
          node {
            data {
              Name
            }
          }
        }
      }
    }
    `) 
    return (
        <Layout pageTitle="About Adlogos">
            {/* {data.allAirtable.edges.map(item=>{
                return (
                    <div>
                        <h2>{item.node.data.Name}</h2>
                        <p>{item.node.data.Files[0].filename}</p>
                        <img src={item.node.data.Files[0].url} />
                    </div>
                )
            })} */}
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default AboutPage