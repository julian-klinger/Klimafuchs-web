import { Link } from "gatsby"
import React from "react"
import logo from "../images/klimafuchs-logo.png"

const Footer = ({ siteTitle }) => {

  return (

    <footer className="min-h-screen-third bg-green-light z-10 pt-6 pb-12">
      <div className="flex flex-wrap justify-center">
        <div className="w-1/3 py-1 px-2">
          <div className="text-center">
            <Link className="block sm:text-sm md:text-base font-light no-underline hover:bg-white hover:text-green p-2" to="/datenschutz">Datenschutz</Link>
            <Link className="block sm:text-sm md:text-base font-light no-underline hover:bg-white hover:text-green p-2" to="/about">Über uns</Link>
            <Link className="block sm:text-sm md:text-base font-light no-underline hover:bg-white hover:text-green p-2" to="/faq">FAQ </Link>
          </div>
        </div>
        <div className="w-1/3 p-2">
          <div className="text-center">
            <img src={logo} className="w-5 md:w-16" />
            <h2 className="text-lg">Klimafuchs</h2>
            <p className="text-sm text-thin">Clever CO2 sparen!</p>
          </div>
        </div>
        <div className="w-1/3 py-1 px-2">
          <div className="text-center">
            <Link className="block sm:text-sm md:text-base font-light no-underline hover:bg-white hover:text-green p-2" to="/imprint">Impressum</Link>
            <Link className="block sm:text-sm md:text-base font-light no-underline hover:bg-white hover:text-green p-2" to="/wiki-link">Mach mit!</Link>
          </div>
        </div>

      </div>
    </footer>

  )
}

export default Footer
