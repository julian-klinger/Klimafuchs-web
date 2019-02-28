import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  
  return (
    <header className="p-5">

      <nav className="flex items-center justify-between flex-wrap">

        <div className="flex items-center flex-no-shrink text-white mr-6">
          <img className="w-12" src="/KlimafuchsLogo.png" />
          <Link className="pl-2 no-underline font-bold text-2xl tracking-tight text-white" to="/" >{siteTitle}</Link>
        </div>

        <div className="">
          <div className="text-sm ">
            <Link to="page-2" href="#responsive-header" className="no-underline text-white mt-4 hover:text-white mr-4">
              FAQs
            </Link>
            <Link to="page-3" href="#responsive-header" className="no-underline text-white mt-4 hover:text-white mr-4">
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
