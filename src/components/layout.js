/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css";

import Navbar from "./navbar/navbar";
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import { useEffect } from "react";
import Footer from "./footer/footer";
import { useState } from "react";
const Layout = ({ children }) => {
  const [page,setPage] = useState(null);
  const [loadScripts,setLoadScripts] = useState(false);

 useEffect(() => {
   fetch(`http://54.226.74.215/wp-json/wp/v2/pages`)
   .then(res => res.json())
   .then(pageData => setPage(pageData))
 },[])
  return (
    <>
     <Helmet>
     
    <link rel="stylesheet" id="twentytwenty-print-style-css" href="http://54.226.74.215/wp-content/themes/twentytwenty/print.css?ver=1.5" media="print"/>
<link rel="stylesheet" id="elementor-icons-css" href="http://54.226.74.215/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.9.1" media="all"/>
<link rel="stylesheet" id="elementor-animations-css" href="http://54.226.74.215/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.0.6" media="all"/>
<link rel="stylesheet" id="elementor-frontend-legacy-css" href="http://54.226.74.215/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css?ver=3.0.6" media="all"/>
<link rel="stylesheet" id="elementor-frontend-css" href="http://54.226.74.215/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.0.6" media="all"/>
<link rel="stylesheet" id={`elementor-post-${7}-css`} href={`http://54.226.74.215/wp-content/uploads/elementor/css/post-${7}.css?ver=1599415101`} media="all"/>
<link rel="stylesheet" id="elementor-global-css" href="http://54.226.74.215/wp-content/uploads/elementor/css/global.css?ver=1599415101" media="all"/>


   <link rel="stylesheet" id="google-fonts-1-css" href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;ver=5.5.1" media="all"/>
      <script src="http://54.226.74.215/wp-content/themes/twentytwenty/assets/js/index.js?ver=1.5" id="twentytwenty-js-js" async=""></script>
      <link rel="https://api.w.org/" href="http://54.226.74.215/wp-json/"/><link rel="alternate" type="application/json" href="http://54.226.74.215/wp-json/wp/v2/pages/10"/><link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://54.226.74.215/xmlrpc.php?rsd"/>
      <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://54.226.74.215/wp-includes/wlwmanifest.xml"/> 
      <meta name="generator" content="WordPress 5.5.1"/>
      <link rel="canonical" href="http://54.226.74.215/"/>
      <link rel="shortlink" href="http://54.226.74.215/"/>
      <link rel="alternate" type="application/json+oembed" href="http://54.226.74.215/wp-json/oembed/1.0/embed?url=http%3A%2F%2F54.226.74.215%2F"/>
      <link rel="alternate" type="text/xml+oembed" href="http://54.226.74.215/wp-json/oembed/1.0/embed?url=http%3A%2F%2F54.226.74.215%2F&amp;format=xml"/>
      
       
         
    </Helmet> 
    
    <div >
      <Navbar />
       {children} 
    
       <Footer /> 
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
