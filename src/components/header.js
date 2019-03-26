import AniLink from "gatsby-plugin-transition-link/AniLink";
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
            <img alt="Klimafuchs-Logo" className="w-12 md:w-16 " src={logo} />
            <AniLink fade to="/" className="pl-2 hover:no-underline font-bold text-2xl lg:text-4xl tracking-tight text-white" >{siteTitle}</AniLink>
          </div>
        </div>

        <ResponsiveMenu
          menuOpenButton={<FontAwesomeIcon className="text-3xl text-right" icon={faBars} />}
          menuCloseButton={<FontAwesomeIcon className="text-3xl text-right" icon={faBars} />}
          changeMenuOn="768px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="text-right p-1 hover:shadow-lg"
          menu={
            <div className="responsive-menu md:flex md:flex-wrap md:flex-no-wrap items-center flex-no-shrink">

              <img alt="Klimafuchs-Logo" className="hidden md:block w-8 sm:w-12 md:w-16 " src={logo} />
              <AniLink fade to="/" className="hidden md:block pl-2 hover:no-underline font-bold text-2xl lg:text-4xl tracking-tight text-white" >{siteTitle}</AniLink>

              <AniLink fade to="/" activeClassName="font-normal shadow bg-white text-green" className="ml-auto w-full block hover:no-underline md:w-auto sm:text-sm block md:inline md:text-base font-light hover:bg-white hover:font-normal hover:text-green p-2 md:mr-4 md:mt-0">
                Home
                </AniLink>
              <AniLink fade to="up" to="/wiki-link" activeClassName="font-normal shadow bg-white text-green" className="w-full block hover:no-underline md:w-auto sm:text-sm block md:inline md:text-base font-light hover:bg-white hover:font-normal hover:text-green p-2 md:mr-4 ">
                Mach mit!
                </AniLink>
              <AniLink fade to="/faq" activeClassName="font-normal shadow bg-white text-green" className="w-full block hover:no-underline md:w-auto sm:text-sm block md:inline md:text-base font-light hover:bg-white hover:font-normal hover:text-green p-2 md:mr-4">
                FAQs
                </AniLink>
              <AniLink fade to="/about" activeClassName="font-normal shadow bg-white text-green" className="w-full block hover:no-underline md:w-auto sm:text-sm block md:inline md:text-base font-light hover:bg-white hover:font-normal hover:text-green p-2 md:mr-4">
                Über uns
                </AniLink>

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
