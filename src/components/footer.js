import { Link } from "gatsby"
import React from "react"
import logo from "../images/klimafuchs-logo.png"

const Footer = ({ siteTitle }) => {

  return (

    <footer className="min-h-screen-third bg-green-light z-10 pt-6 pb-12">
      <div class="flex flex-wrap justify-center">
        <div class="w-1/3 py-1 px-2">
          <div class="text-center">
            <Link className="block sm:text-sm md:text-base font-light no-underline text-white hover:bg-white hover:text-green p-2" to="/imprint">Impressum</Link>
            <Link className="block sm:text-sm md:text-base font-light no-underline text-white hover:bg-white hover:text-green p-2" to="/imprint">Über uns</Link>
            <Link className="block sm:text-sm md:text-base font-light no-underline text-white hover:bg-white hover:text-green p-2" to="/imprint">FAQ </Link>
          </div>
        </div>
        <div class="w-1/3 p-2">
          <div class="text-center">
            <img src={logo} className="w-5 md:w-16" />
            <h2 className="text-white text-lg">Klimafuchs</h2>
            <p className="text-white text-sm text-thin">Clever CO2 sparen!</p>
          </div>
        </div>
        <div class="w-1/3 py-1 px-2">
          <div class="text-center">
            <Link className="block sm:text-sm md:text-base font-light no-underline text-white hover:bg-white hover:text-green p-2" to="/imprint">Datenschutz</Link>
            <Link className="block sm:text-sm md:text-base font-light no-underline text-white hover:bg-white hover:text-green p-2" to="/imprint">Mach mit!</Link>
            <Link className="block sm:text-sm md:text-base font-light no-underline text-white hover:bg-white hover:text-green p-2" to="/imprint">Unterstützen</Link>
          </div>
        </div>

      </div>
    </footer>

  )
}

export default Footer
