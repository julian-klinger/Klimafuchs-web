import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import imageApp1 from "../images/app-dummy-1.png"
import imageApp2 from "../images/app-dummy-2.png"
import imageApp3 from "../images/app-dummy-3.png"
import imageAppstore from "../images/appstore-badge.png"
import imagePlaystore from "../images/playstore-badge.png"
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function SampleNextArrow(props) {
  const { onClick } = props;
  return (

    <FontAwesomeIcon
      onClick={onClick}
      icon={faAngleRight}
      className="text-white hover:text-blue text-shadow text-3xl md:text-6xl">>
    </FontAwesomeIcon>

  );
}

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon={faAngleLeft}
      className="text-white hover:text-blue text-shadow text-3xl md:text-6xl">
    </FontAwesomeIcon>
  );
}

class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      pauseOnHover: true,
      centerMode: true,
      centerPadding: 0,
      slidesToShow: 3,
      speed: 700,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="">
            <img alt="App-Preview Screen" src={imageApp1} />
          </div>
          <div className="">
            <img alt="App-Preview Screen" src={imageApp2} />
          </div>
          <div className="">
            <img alt="App-Preview Screen" src={imageApp3} />
          </div>
          <div className="">
            <img alt="App-Preview Screen" src={imageApp3} />
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
        <h1 className="text-white text-center text-2xl sm: text-3xl md:text-4xl lg:text-6xl px-5 mt-16">Clever das Klima schützen!</h1>
        <h2 className="text-white font-light text-center text-lg p-5">Mit der Klimafuchs-App bekommst du jede Woche vier Klima-Challenges, die dir helfen deinen CO2-Fußabdruck zu reduzieren. Vergleiche dich mit deinen Freunden in Teams werde der beste Klimafuchs!</h2>
        <div className="flex-wrap w-1/3 md:mt-6 mx-auto pb-12">
          <a href="https://www.apple.com/de/ios/app-store/" target="_blank">
            <img alt="Appstore Badge" className="ml-auto sm:w-1/2 p-2" src={imageAppstore} />
          </a>
          <a href="https://play.google.com/store" target="_blank">
            <img alt="Playstore Badge" className="mr-auto sm:w-1/2 p-2" src={imagePlaystore} />
          </a>
        </div>
      </div>
    </div>
    <div className="mx-auto w-3/5">
      {/* <img src={imageApp1} /> */}
      <CenterMode />
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
