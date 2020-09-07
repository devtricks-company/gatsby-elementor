import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';
import {useEffect,useState} from 'react';
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby";

const Programs = () => {
  const [page,setPage] = useState(null)
  useEffect(() => {
    fetch(`http://54.226.74.215/wp-json/wp/v2/pages/14`)
    .then(res => res.json())
    .then(pageData => setPage(pageData))
  },[])
  const loadScript = () => {
    return (<Helmet>
    <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossOrigin="anonymous"
  />, 
  <script src={withPrefix('wp-embed.js')} type="text/javascript" />,
         <script src={withPrefix('jquery.js')} type="text/javascript" />,
         <script src={withPrefix('jquery-numerator.min.js')} type="text/javascript" />,
         <script src={withPrefix('frontend-modules.js')} type="text/javascript" />,
         <script src={withPrefix('position.min.js')} type="text/javascript" />,
         <script src={withPrefix('dialog.js')} type="text/javascript" />,
         <script src={withPrefix('waypoints.js')} type="text/javascript" />,
         <script src={withPrefix('swiper.js')} type="text/javascript" />,
         <script src={withPrefix('share-link.js')} type="text/javascript" />,
    

    <script id="elementor-frontend-js-before" dangerouslySetInnerHTML={{__html:`
      
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
      "version": "3.0.6",
      "is_static": false,
      "legacyMode": {
          "elementWrappers": true
      },
      "urls": {
          "assets": "http:\/\/54.226.74.215\/wp-content\/plugins\/elementor\/assets\/"
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
          "id": 10,
          "title": "Sawiris%20School%20of%20Business%20%7C%20SSB%20%E2%80%93%20Business%20Focused%20on%20Reciprocity",
          "excerpt": "",
          "featuredImage": false
      }
  };
    `}} />,
       <script src={withPrefix('frontend.js')} type="text/javascript" />

     </Helmet>)
  }
  return (
    <>
    {page ?  <header id="about" className="animate__animated animate__bounce">
            
            <Layout> 
         <div
           dangerouslySetInnerHTML={{
             __html: page.content.rendered,
           }}
         />
           {loadScript()}
           </Layout>
     </header> : null}
     
        </>
     
   
  )
}

export default Programs
