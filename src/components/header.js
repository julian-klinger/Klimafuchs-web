import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/klimafuchs-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ResponsiveMenu from 'react-responsive-navbar';


const Header = ({ siteTitle }) => {

  return (
    <header className="p-5">

      <div className="flex flew-wrap md:flex-no-wrap md:block justify-between" >

        <div className="w-1/2">

          <div className="flex items-center md:hidden">
            <img alt="Klimafuchs-Logo" className="w-8 sm:w-12 md:w-16 " src={logo} />
            <Link className="pl-2 no-underline font-bold sm:text-xl lg:text-4xl tracking-tight text-white" to="/" >{siteTitle}</Link>
          </div>
        </div>

        <ResponsiveMenu
          menuOpenButton={<FontAwesomeIcon className="text-3xl text-right hover:shadow" icon={faBars} />}
          menuCloseButton={<FontAwesomeIcon className="text-3xl text-right hover:shadow" icon={faBars} />}
          changeMenuOn="768px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="text-right"
          menu={
            <div className="md:flex md:flex-wrap md:flex-no-wrap items-center flex-no-shrink">

              <img alt="Klimafuchs-Logo" className="hidden md:block w-8 sm:w-12 md:w-16 " src={logo} />
              <Link className="hidden md:block pl-2 no-underline font-bold sm:text-xl lg:text-4xl tracking-tight text-white" to="/" >{siteTitle}</Link>

              <Link to="/wiki-link" className="ml-auto w-full block md:w-auto sm:text-sm block md:inline md:text-base font-light no-underline hover:bg-white hover:text-green p-2 md:mr-4 mt-3 md:mt-0">
                Mach mit!
              </Link>
              <Link to="/faq" className="w-full block md:w-auto sm:text-sm block md:inline md:text-base font-light no-underline hover:bg-white hover:text-green p-2 md:mr-4">
                FAQs
              </Link>
              <Link to="/about" className="w-full block md:w-auto sm:text-sm block md:inline md:text-base font-light no-underline hover:bg-white hover:text-green p-2 md:mr-4">
                Über uns
              </Link>

            </div>
          }
        />
      </div>

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
