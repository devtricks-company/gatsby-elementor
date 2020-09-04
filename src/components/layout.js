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
const Layout = ({ children }) => {
 useEffect(() => {

      var elementorFrontendConfig = {
          "environmentMode": {
              "edit": false,
              "wpPreview": false
          },
          "i18n": {
              "shareOnFacebook": "Share on Facebook",
              "shareOnTwitter": "Share on Twitter",
              "pinIt": "Pin it",
              "download": "Download",
              "downloadImage": "Download image",
              "fullscreen": "Fullscreen",
              "zoom": "Zoom",
              "share": "Share",
              "playVideo": "Play Video",
              "previous": "Previous",
              "next": "Next",
              "close": "Close"
          },
          "is_rtl": false,
          "breakpoints": {
              "xs": 0,
              "sm": 480,
              "md": 768,
              "lg": 1025,
              "xl": 1440,
              "xxl": 1600
          },
          "version": "3.0.5",
          "is_static": false,
          "legacyMode": {
              "elementWrappers": true
          },
          "urls": {
              "assets": "http:\/\/localhost\/ssb\/wp-content\/plugins\/elementor\/assets\/"
          },
          "settings": {
              "page": [],
              "editorPreferences": []
          },
          "kit": {
              "global_image_lightbox": "yes",
              "lightbox_enable_counter": "yes",
              "lightbox_enable_fullscreen": "yes",
              "lightbox_enable_zoom": "yes",
              "lightbox_enable_share": "yes",
              "lightbox_title_src": "title",
              "lightbox_description_src": "description"
          },
          "post": {
              "id": 7,
              "title": "SSB%20%E2%80%93%20Just%20another%20WordPress%20site",
              "excerpt": "",
              "featuredImage": false
          }
      }
 },[]);
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
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
