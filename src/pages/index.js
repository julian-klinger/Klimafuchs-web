import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import imageApp from "../images/app-dummy.png"
import imageAppstore from "../images/appstore-badge.png"
import imagePlaystore from "../images/playstore-badge.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="flex flex-col">
      <div className="container mx-auto">
        <h1 className="text-white text-center text-6xl p-5 mt-10">Clever das Klima schützen!</h1>
        <h2 className="text-white font-thin text-center text-lg">Etwas mehr muted Text, der kurz die App erklärt</h2>
        <div className="flex mt-6">
          <img className="ml-auto h-full w-1/6 p-2" src={imageAppstore} />
          <img className="mr-auto h-full w-1/6 p-2" src={imagePlaystore} />
        </div>
        <div className="">
          <img className="mb-20" src={imageApp} />
        </div>
      </div>
    </div>

    <div className="flex flex-col justify-center bg-blue min-h-screen skewed-bg">
      <div className="container mx-auto unskew mb-24">
        <h1 className="text-white text-center text-6xl p-5">Jede Woche vier neue Challenges</h1>
        <h2 className="text-white font-thin text-center text-sm">Etwas mehr muted Text, der kurz die App erklärt Etwas mehr muted Text, der kurz die App erklär</h2>
        <h1 className="text-white text-center text-6xl p-5">Interessante Infos im Newsfeed</h1>
        <h2 className="text-white font-thin text-center text-sm">Etwas mehr muted Text, der kurz die App erklärt Etwas mehr muted Text, der kurz die App erklär</h2>
        <h1 className="text-white text-center text-6xl p-5">Rangliste für die besten Klimafüchse</h1>
        <h2 className="text-white font-thin text-center text-sm">Etwas mehr muted Text, der kurz die App erklärtEtwas mehr muted Text, der kurz die App erklär</h2>
      </div>
    </div>


  </Layout>
)

export default IndexPage
