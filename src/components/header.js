import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Nav from "./nav"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#8ebf8f`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: `100%`,
        padding: `1.45rem 1.0875rem`,
        display: `flex`
      }}>
  
    <Link to="/" style={{
        width: '100 px',
        marginLeft: `auto`,
        marginRight: `auto`
        }}>
      <Logo style={{
        display: `flex`,
      }}/>
       
    </Link>
    
      
    </div>
    <Nav />
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
