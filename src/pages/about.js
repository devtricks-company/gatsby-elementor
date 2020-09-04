import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';

const About = () => {
    return <StaticQuery
        query={graphql`
      {
        allWordpressPage(filter: { title: { eq: "About" } }) {
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

export default About
