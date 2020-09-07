import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import { useEffect } from "react";
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
const Header = () => {
  const [page,setPage] = useState(null)
  useEffect(() => {
    fetch(`http://54.226.74.215/wp-json/wp/v2/pages/10`)
    .then(res => res.json())
    .then(pageData => setPage(pageData))
  },[])
  const loadScript = () => {
    return (<Helmet>
         <script src={withPrefix('wp-embed.js')} type="text/javascript" />
         <script src={withPrefix('jquery.js')} type="text/javascript" />
         <script src={withPrefix('jquery-numerator.min.js')} type="text/javascript" />
         <script src={withPrefix('frontend-modules.js')} type="text/javascript" />
         <script src={withPrefix('position.min.js')} type="text/javascript" />
         <script src={withPrefix('dialog.js')} type="text/javascript" />
         <script src={withPrefix('waypoints.js')} type="text/javascript" />
         <script src={withPrefix('swiper.js')} type="text/javascript" />
         <script src={withPrefix('share-link.js')} type="text/javascript" />
    
       <script src={withPrefix('frontend.js')} type="text/javascript" />

    </Helmet>)
  }
  return (
    <>
    {page ?  <header id="header" className="animate__animated animate__bounce">
            
             
         <div
           dangerouslySetInnerHTML={{
             __html: page.content.rendered,
           }}
         />
           {loadScript()}
    
     </header> : null}
       
        </>
     
   
  )
}

export default Header
