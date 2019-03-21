import { Link } from "gatsby"
import React from "react"
import logo from "../images/klimafuchs-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ siteTitle }) => {

  return (

      <footer className="min-h-screen-3/4 bg-green-light z-10 pt-6 pb-12 footer">
        <div className="flex flex-wrap">
          <div className="w-1/2 py-1 px-2">
            <div>

            </div>
          </div>
          <div className="text-center sm:text-center md:text-left sm:w-full md:w-1/2 p-2">

            <div className="py-6">
              <h2 className="text-xl pb-3">Zum Newsletter anmelden</h2>
              <form className="mx-auto md:mx-0 min-w-3/4 w-full max-w-sm bg-transparent rounded shadow-lg pl-3 md:pl-8 py-4 pr-2 md:pr-5">
                <div className="flex items-center py-2">
                  <input className="text-center md:text-left border-b text-base lg:text-lg font-thin border-white appearance-none bg-transparent w-full text-white font-base mr-3 py-1 leading-tight focus:outline-none" type="text" placeholder="meine.email@adresse.de" />
                  <button className="ml-2 md:ml-8 shadow flex-no-shrink text-white bg-blue hover:bg-blue-light hover:text-white text-sm text-white py-3 px-3 rounded" type="button">
                    Abschicken
                </button>
                </div>
              </form>
            </div>

            <div className="py-6">
              <FontAwesomeIcon icon={faWikipediaW} alt="wiki" className="text-2xl hover:text-blue" />
              <FontAwesomeIcon icon={faFacebook} alt="wiki" className="text-2xl ml-5 hover:text-blue" />
            </div>

            <div className="py-3">
              <Link className="block sm:text-sm md:text-base font-light no-underline hover:underline pb-1" to="/">Home</Link>
              <Link className="block sm:text-sm md:text-base font-light no-underline hover:underline py-1" to="/datenschutz">Datenschutz</Link>
              <Link className="block sm:text-sm md:text-base font-light no-underline hover:underline py-1" to="/about">Über uns</Link>
              <Link className="block sm:text-sm md:text-base font-light no-underline hover:underline py-1" to="/faq">FAQ </Link>
              <Link className="block sm:text-sm md:text-base font-light no-underline hover:underline py-1" to="/imprint">Impressum</Link>
              <Link className="block sm:text-sm md:text-base font-light no-underline hover:underline py-1" to="/wiki-link">Mach mit!</Link>
            </div>

            <div className="pt-12">
              <img src={logo} alt="logo" className="w-24 sm:w-24 md:w-24" />
            </div>

          </div>

        </div>
      </footer>

  )
}

export default Footer
