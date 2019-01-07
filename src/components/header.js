import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/somalia.png')} width="60" /></Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/work">Our Work</Link>
      <Link to="/contact"><button>Contact</button></Link>
    </div>
  </div>
)
export default Header
