import React, { useState } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header/header"
import { useEffect } from "react"


const IndexPage = () => {
  

  

  return (
    <Layout>
      <SEO title="Home" />
     
      <Header />
    </Layout>
  )
}

export default IndexPage
