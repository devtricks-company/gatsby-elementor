import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'

export default function HTML(props) {
 
 

 
  return (
    <html {...props.htmlAttributes}>
      <head>

         <script
          src="https://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossOrigin="anonymous"
        /> 
       

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
     
      <script id="elementor-frontend-js-before" dangerouslySetInnerHTML={{__html:`
      
      var elementorFrontendConfig = {
        "environmentMode": {
            "edit": false,
            "wpPreview": true
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
            "id": 10,
            "title": "Home%7C%20SSB%20%E2%80%93%20Just%20another%20WordPress%20site",
            "excerpt": "",
            "featuredImage": false
        },
        "user": {
            "roles": ["administrator"]
        }
    };
      `}} />
   
      
     
     
   
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}