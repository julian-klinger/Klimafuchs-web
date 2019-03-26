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
      <p className="content-text">
        Beim Klimafuchs kannst du nicht nur als normale*r Nutzer*in der App mitmachen, sondern dich auch inhaltlich einbringen! Wir haben ein Klimafuchs-Wiki erstellt, in dem Themenwochen und Challenges erstellt werden können.
      </p>
      <p className="content-text">
        Wenn du eine Idee hast, wie die Klimafüchse CO2 sparen können, dann schau auf LINK	vorbei und trage deinen Vorschlag für eine oder mehrere Themenwochen ein. Bei Fragen oder noch mehr Ideen, wie Du zum Klimafuchs beitragen möchtest, schreib uns einfach eine Mail an mitmachen@klimafuchs.org. Wir freuen uns auf deine Themenwochen :-)
      </p>
      <a href="https://enviroommate.org/wiki/index.php/Hauptseite" target="_blank" rel="noopener noreferrer" >
        <button className="shadow p-3 bg-blue hover:bg-blue-light text-white" >
          <span className="content-text">
            -> zum Klimafuchs-<FontAwesomeIcon className="text-2xl" icon={faWikipediaW} />iki
          </span>
        </button>
      </a>

      <div className="pt-10 pb-24">
        <Link to="/">Zurück</Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage
