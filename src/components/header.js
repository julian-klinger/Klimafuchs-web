import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/klimafuchs-logo.png"

const Header = ({ siteTitle }) => {
  
  return (
    <header className="p-5">

      <nav className="flex items-center justify-between flex-wrap">

        <div className="flex items-center flex-no-shrink text-white mr-6">
          <img className="w-8 sm:w-12 md:w-16 " src={logo} />
          <Link className="pl-2 no-underline font-bold sm:text-xl lg:text-4xl tracking-tight text-white" to="/" >{siteTitle}</Link>
        </div>

        <div className="">
          <div className="text-sm ">
            <Link to="page-2" href="#responsive-header" className="sm:text-sm md:text-base font-thin no-underline text-white mt-4 hover:text-blue mr-4">
              FAQs
            </Link>
            <Link to="page-3" href="#responsive-header" className="sm:text-sm md:text-base font-thin no-underline text-white mt-4 hover:text-blue mr-4">
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
