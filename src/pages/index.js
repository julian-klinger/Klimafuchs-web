import React, { Component } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import imageApp1 from "../images/app-dummy-1.png"
import imageApp2 from "../images/app-dummy-2.png"
import imageApp3 from "../images/app-dummy-3.png"
import imageAppstore from "../images/appstore-badge.png"
import imagePlaystore from "../images/playstore-badge.png"

import Slider from "react-slick";

class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div className="bg-red">
            <h3>1</h3>
          </div>
          <div className="bg-red">
            <h3>2</h3>
          </div>
          <div className="bg-red">
            <h3>3</h3>
          </div>
          <div className="bg-red">
            <h3>4</h3>
          </div>
          <div className="bg-red">
            <h3>5</h3>
          </div>
          <div className="bg-red">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="flex flex-col">
      <div className="container mx-auto">
        <h1 className="text-white text-center text-2xl sm: text-3xl md:text-4xl lg:text-6xl px-5 mt-10">Clever das Klima schützen!</h1>
        <h2 className="text-white font-light text-center text-lg p-5">Mit der Klimafuchs-App bekommst du jede Woche vier Klima-Challenges, die dir helfen deinen CO2-Fußabdruck zu reduzieren. Vergleiche dich mit deinen Freunden in Teams werde der beste Klimafuchs!</h2>
        <div className="flex-wrap w-1/3 md:mt-6 mx-auto">
          <img className="ml-auto sm:w-1/2 p-2" src={imageAppstore} />
          <img className="mr-auto sm:w-1/2 p-2" src={imagePlaystore} />
        </div>
        <div className="mx-auto pb-32">
          <CenterMode />
        </div>
      </div>
    </div>

    <div className="flex flex-col bg-blue min-h-screen-half">
      <div className="skewed-bg bg-blue h-24 md:h-32"></div>
      <div className="container mx-auto">
        <h1 className="text-white text-center text-xl sm: text-2xl md:text-4xl lg:text-5xl p-5">Jede Woche vier neue Challenges</h1>
        <h2 className="text-white font-thin text-center text-sm px-5">Etwas mehr muted Text, der kurz die App erklärt Etwas mehr muted Text, der kurz die App erklär</h2>
        <h1 className="text-white text-center text-xl sm: text-2xl md:text-4xl lg:text-5xl p-5">Interessante Infos im Newsfeed</h1>
        <h2 className="text-white font-thin text-center text-sm px-5">Etwas mehr muted Text, der kurz die App erklärt Etwas mehr muted Text, der kurz die App erklär</h2>
        <h1 className="text-white text-center text-xl sm: text-2xl md:text-4xl lg:text-5xl p-5">Rangliste für die besten Klimafüchse</h1>
        <h2 className="text-white font-thin text-center text-sm px-5 mb-32">Etwas mehr muted Text, der kurz die App erklärtEtwas mehr muted Text, der kurz die App erklär</h2>
      </div>
    </div>


  </Layout>
)

export default IndexPage
