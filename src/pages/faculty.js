import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';
const Faculty = () => {
    return <StaticQuery
        query={graphql`
      {
        allWordpressPage(filter: { title: { eq: "Faculty" } }) {
          edges {
            node {
              content
              
            }
          }
        }
      }
    `}
        render={props => {
            return (
                <Layout>
                <section id="about">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: props.allWordpressPage.edges[0].node.content,
                        }}
                    />
                </section>
                </Layout>
            )
        }}
    />
}

export default Faculty
