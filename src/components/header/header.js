import React from "react"
import { graphql, StaticQuery } from "gatsby"
const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressPage(filter: { title: { eq: "Home" } }) {
            edges {
              node {
                content
                
              }
            }
          }
        }
      `}
      render={props => (
        <header id="header" className="animate__animated animate__bounce">
         
            <div
              dangerouslySetInnerHTML={{
                __html: props.allWordpressPage.edges[0].node.content,
              }}
            />
       
        </header>
      )}
    />
  )
}

export default Header
