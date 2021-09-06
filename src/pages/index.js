import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "dqnotes"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Hey there{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>I'm Quang. I publish my notes on this site.</p>
        <p>
          Not much yet since I've scrapped the old site. Yeah, old habit. I love writing in English, but I'm learning to write better in my mother tongue, Tiếng Việt, too.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
