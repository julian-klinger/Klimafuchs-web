import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Impressum" />
    <div className="container mx-auto">
      <div class="font-light text-lg p-5">

        <h1>Impressum</h1>

        <div>
          <p>Die Webseite enviroommate.org wird betrieben durch den:</p>
          <p>
            <a href="http://www.verein-allgemeinbildung.de">Allgemeinbildung - Natur Mensch Technik e.V.</a>
            <br /> Wielandstraße 15<br /> 28203 Bremen
          </p>
          <p>Vertretungsberechtigte Vorstände des Vereins:<br />Laura Schnee<br />Christian Gutsche</p>
          <p>Tel.: +49 421 17310792 <br /> Fax: +49 421 17310793</p>
          <p>Mail: <span id="cloakaca20c202e704c0719e234a79615250d"><a href="mailto:info@enviroommate.org"> info@enviroommate.org</a></span></p>
        </div>
        <Link to="/">Zurück</Link>

      </div>
    </div>
  </Layout>
)

export default SecondPage
