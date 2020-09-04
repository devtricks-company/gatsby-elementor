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
const Layout = ({ children }) => {
 
  return (
    <>
    <Helmet>
   
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
