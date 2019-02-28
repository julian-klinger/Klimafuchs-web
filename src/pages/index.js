import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="flex flex-col">

    <h1 className="text-white text-center text-4xl p-5">Clever das Klima schützen!</h1>
    <h2 className="text-white text-center text-sm">Etwas mehr muted Text, der kurz die App erklärt</h2>
    <img className="content-between w-2/5" src="/app-dummy.png" />
    </div>
  </Layout>
)

export default IndexPage
