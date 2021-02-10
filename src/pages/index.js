import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Newscontainer from "../components/newscontainer"


function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Latest News</h1>
      <Newscontainer />
      
    </Layout>
  );
}

export default IndexPage
