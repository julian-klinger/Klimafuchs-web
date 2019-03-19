import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/klimafuchs-logo.png"

const Header = ({ siteTitle }) => {
  
  return (
    <header className="p-5">

      <nav className="flex items-center justify-between flex-wrap">

        <div className="flex items-center flex-no-shrink mr-6">
          <img alt="Klimafuchs-Logo" className="w-8 sm:w-12 md:w-16 " src={logo} />
          <Link className="pl-2 no-underline font-bold sm:text-xl lg:text-4xl tracking-tight text-white" to="/" >{siteTitle}</Link>
        </div>

        <div className="">
          <div className="text-sm ">
            <Link to="/wiki-link" href="#responsive-header" className="sm:text-sm md:text-base font-light no-underline mt-4 hover:bg-white hover:text-green p-2 mr-4">
              Mach mit!
            </Link>
            <Link to="/faq" href="#responsive-header" className="sm:text-sm md:text-base font-light no-underline mt-4 hover:bg-white hover:text-green p-2 mr-4">
              FAQs
            </Link>
            <Link to="/about" href="#responsive-header" className="sm:text-sm md:text-base font-light no-underline mt-4 hover:bg-white hover:text-green p-2 mr-4">
              Über uns
            </Link>
          </div>
        </div>

      </nav>

    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Klimafuchs`,
}

export default Header
