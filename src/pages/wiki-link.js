import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Wiki" />
    <div className="container mx-auto">
      <h1 className="text-3xl">Mach mit im Klimafuchs-Wiki!</h1>
      <p>
        Schau in unserem
        <a href="https://enviroommate.org/wiki/index.php/Hauptseite" rel="noopener noreferrer" target="_blank">
          {/* <FontAwesomeIcon className="text-xl" icon={faWikipediaW} /> */}
          Wiki
        </a>
        vorbei und schlage coole Challenges vor.
      </p>


      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
