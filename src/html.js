import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'

export default function HTML(props) {
 
 

 
  return (
    <html {...props.htmlAttributes}>
      <head>
      <link rel="stylesheet" id="elementor-post-7-css" href="http://54.226.74.215/wp-content/uploads/elementor/css/post-7.css?ver=1599464548" media="all" />
      <link rel="stylesheet" id="elementor-post-10-css" href="http://54.226.74.215/wp-content/uploads/elementor/css/post-10.css?ver=1599464548" media="all" />
      <link rel="stylesheet" id="elementor-post-12-css" href="http://54.226.74.215/wp-content/uploads/elementor/css/post-12.css?ver=1599464548" media="all" />
      <link rel="stylesheet" id="elementor-post-14-css" href="http://54.226.74.215/wp-content/uploads/elementor/css/post-14.css?ver=1599464548" media="all" />
      <link rel="stylesheet" id="elementor-post-16-css" href="http://54.226.74.215/wp-content/uploads/elementor/css/post-16.css?ver=1599464548" media="all" />
      <link rel="stylesheet" id="elementor-post-18-css" href="http://54.226.74.215/wp-content/uploads/elementor/css/post-18.css?ver=1599464548" media="all" />
        
       

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