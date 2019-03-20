import React from "react"
import Layout from "../components/layout"
import AppCarousel from "./_carousel"
import SEO from "../components/seo"
import imageAppstore from "../images/appstore-badge.png"
import imagePlaystore from "../images/playstore-badge.png"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="flex flex-col">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl px-5 mt-16">Clever das Klima schützen!</h1>
        <h2 className="text text-base lg:text-xl p-5">Mit der Klimafuchs-App bekommst du jede Woche vier Klima-Challenges, die dir helfen deinen CO2-Fußabdruck zu reduzieren. Vergleiche dich mit deinen Freunden in Teams werde der beste Klimafuchs!</h2>
        <div className="flex-wrap w-1/2 md:w-1/3 md:mt-6 mx-auto pb-12">
          <a href="https://www.apple.com/de/ios/app-store/" target="_blank" rel="noopener noreferrer">
            <img alt="Appstore Badge" className="ml-auto sm:w-1/2 p-2" src={imageAppstore} />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img alt="Playstore Badge" className="mr-auto sm:w-1/2 p-2" src={imagePlaystore} />
          </a>
        </div>
      </div>
    </div>
    <div className="mx-auto w-5/6 md:w-3/5">
      <AppCarousel />
    </div>

    <div className="flex flex-col bg-blue">
      <div className="skewed-bg-1 bg-blue h-24 md:h-32"></div>
      <div className="container mx-auto">
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl px-5 pt-8 lg:pt-16 pb-4">Vier neue <span className="px-2 bg-green">Challenges</span> jede Woche</h1>
        <h2 className="font-light text-center px-5 text-base lg:text-xl lg:px-48">Jede Woche gibt's für alle Klimafüchse vier neue Challenges zum cleveren CO2 sparen. Keine Lust auf eine Challenge oder zu einfach für Dich? Einfach einen Joker setzen und eine neue Challenge bekommen.</h2>
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl px-5 pt-8 lg:pt-16 pb-4">Tipps im <span className="px-2 bg-green">Newsfeed</span> teilen</h1>
        <h2 className="font-light text-center px-5 text-base lg:text-xl lg:px-48">Habt Ihr Tipps zu einer Challenge für die anderen Klimafüchse? Fragen? Oder etwas cooles gesehen, dass Ihr unbedingt teilen möchtet? Postet es einfach im Newsfeed!</h2>
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl px-5 pt-8 lg:pt-16 pb-4">Spiel im <span className="px-2 bg-green">Team</span> oder für Dich</h1>
        <h2 className="font-light text-center px-5 text-base lg:text-xl lg:px-48 mb-16">Wer möchte, darf sich sowohl alleine als auch in Teams mit anderen Klimafüchsen messen. Sammelt Punkte durch das Erfüllen von Challenges und vergleicht Euch mit anderen Teams derselben Größe.</h2>
      </div>
    </div>

  </Layout>
)

export default IndexPage
