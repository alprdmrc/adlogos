import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { 
    container,
    heading,
    navBar,
    navLinks,
    navLinkItem,
    navLinkText,
    logo
 } from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav className={navBar}>
        <StaticImage className={logo} src="../images/adlogos_logo.png" alt="AdLogos"/>
        <ul className={navLinks}>
        <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
        <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout