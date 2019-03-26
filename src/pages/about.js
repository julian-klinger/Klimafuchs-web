import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Über uns" />
    <div className="container mx-auto">
      <h1 className="text-3xl">Über uns</h1>
      <p className="content-text">
        Ausgangspunkt des Klimafuchses war die Idee, wie man Menschen dabei unterstützen könnte, spielerisch CO2 zu sparen. In einem Seminar gingen Studierende dieses Idee nach und erarbeiteten das Konzept einer App, die Nutzer*innen mit Challenges versorgt. Nach Erstellung eines ersten Prototypen wurde die App im Rahmen von Bachelorarbeiten designt und umgesetzt.
      </p>
      <p className="content-text">
        Nach und nach wuchs das Ökosystem des Klimafuchs um unsere Webseite, ein Content-Management-System und das Klimafuchs-Wiki. Mittlerweile wird der Klimafuchs von einem universitären Arbeitskreis betreut, in dem engagierte Studierende, Mitarbeiter der Universität Bremen und der Bremer Verein Allgemeinbildung - Natur Mensch Technik e.V. ehrenamtlich an der Weiterentwicklung arbeiten.
      </p>
    </div>
    <div className="container mx-auto pt-10 pb-24 px-0">
      <Link to="/">Zurück</Link>
    </div>
  </Layout>
)

export default SecondPage
