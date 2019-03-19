import React, { Component } from "react"
import imageApp1 from "../images/app-dummy-1.png"
import imageApp2 from "../images/app-dummy-2.png"
import imageApp3 from "../images/app-dummy-3.png"
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
      className="hover:text-blue text-shadow text-3xl md:text-6xl">>
    </FontAwesomeIcon>

  );
}

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon={faAngleLeft}
      className="hover:text-blue text-shadow text-3xl md:text-6xl">
    </FontAwesomeIcon>
  );
}

export default class AppCarousel extends Component {
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
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
          }
        }
      ]
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
            <img alt="App-Preview Screen" src={imageApp1} />
          </div>
        </Slider>
      </div>
    );
  }
}

