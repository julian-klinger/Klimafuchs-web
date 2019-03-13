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
      <div className="bg-green min-h-screen flex flex-col h-full font-sans">

        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="flex-1" >
          <main className="mx-auto" >
            {children}
          </main>
        </div>

        <footer className="min-h-screen-third bg-green-light p-10 z-10">
          <Link to="/imprint">impressum</Link>
        </footer>

      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
