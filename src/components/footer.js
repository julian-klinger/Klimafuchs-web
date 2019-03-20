import { Link } from "gatsby"
import React from "react"
import logo from "../images/klimafuchs-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ siteTitle }) => {

  return (

    <footer className="min-h-screen-third bg-green-light z-10 pt-6 pb-12">
      <div className="flex flex-wrap justify-center">
        <div className="w-1/3 py-1 px-2">
          <div className="text-center">
            <FontAwesomeIcon icon={faWikipediaW} alt="wiki" className="text-2xl my-3" />
            <h2 className="text-xl">das Wiki</h2>
            <p className="text-base text-thin">Mach mit!</p>
          </div>
        </div>
        <div className="sm:w-full md:w-1/3 p-2">
          <div className="text-center">
            <img src={logo} alt="logo" className="w-24 sm:w-32 md:w-1/5" />
            <h2 className="text-2xl">Klimafuchs</h2>
            <p className="text-base text-thin">Clever CO2 sparen!</p>
            <Link className="block sm:text-sm md:text-base font-light no-underline hover:underline py-1 pt-8" to="/datenschutz">Datenschutz</Link>
            <Link className="block sm:text-sm md:text-base font-light no-underline hover:underline py-1" to="/about">Über uns</Link>
            <Link className="block sm:text-sm md:text-base font-light no-underline hover:underline py-1" to="/faq">FAQ </Link>
            <Link className="block sm:text-sm md:text-base font-light no-underline hover:underline py-1" to="/imprint">Impressum</Link>
            <Link className="block sm:text-sm md:text-base font-light no-underline hover:underline py-1" to="/wiki-link">Mach mit!</Link>
          </div>
        </div>
        <div className="w-1/3 py-1 px-2">
          <div className="text-center">
          <FontAwesomeIcon icon={faFacebookF} alt="wiki" className="text-2xl my-3" />
            <h2 className="text-xl">... bei Facebook</h2>
            <p className="text-base text-thin">Mach mit!</p>

          </div>
        </div>

      </div>
    </footer>

  )
}

export default Footer
