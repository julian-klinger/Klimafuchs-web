import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons'

const SecondPage = () => (
  <Layout>
    <SEO title="Wiki" />
    <div className="container mx-auto">
      <h1 className="text-3xl">Mach mit im Klimafuchs-Wiki!</h1>
      <p>
         
        Schau in unserem
        <a href="https://enviroommate.org/wiki/index.php/Hauptseite" rel="noopener noreferrer" target="_blank">

          Wiki
        </a>
        vorbei und schlage coole Challenges vor.
      </p>

      <div className="text-center bg-white w-1/4 shadow text-green p-4 hover:bg-grey-light">
        <FontAwesomeIcon className="text-7xl" icon={faWikipediaW} />
        <span className="text-4xl font-hairline" >iki</span>
      </div>

      <div className="pt-10 pb-24">
        <Link to="/">Zurück</Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage
