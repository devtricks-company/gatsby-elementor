import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header/header"
import { useEffect } from "react"

const IndexPage = () => {
  useEffect(() => {
    fetch("http://54.226.74.215/wp-json/wp/v2/pages")
      .then(res => res.json())
      .then(pagesData => console.log(pagesData))
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Header />
    </Layout>
  )
}

export default IndexPage
