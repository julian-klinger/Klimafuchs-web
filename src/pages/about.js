import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Über uns" />
    <div className="container mx-auto">
      <h1 className="text-3xl">Über uns</h1>
      <p className="font-thin text-base">
        Der Klimafuchs wurde von einem universitären Arbeitskreis ins Leben gerufen. Seitdem arbeiten engagierte Studierende, Mitarbeiter der Universität Bremen und der Bremer Verein Allgemeinbildung - Natur Mensch Technik e.V. ehrenamtlich an der Weiterentwicklung. 
      </p>
      <p className="font-thin text-base">
        Noch ein Absatz mit etwas mehr Text. 
      </p>
      <div className="container mx-auto pt-10 pb-24">
        <Link to="/">Zurück</Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage
