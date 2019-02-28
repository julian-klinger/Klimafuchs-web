/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import '../css/global.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="bg-green min-h-screen flex flex-col h-full">

        <Header siteTitle={data.site.siteMetadata.title} />

        <main className="flex-1 p-5 h-screen-half">
          {children}
        </main>

        <footer className="bg-red pin-b p-10">
          <Link to="/page-4/">impressum</Link>
        </footer>

      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
