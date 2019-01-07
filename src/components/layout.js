import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Card from './Card';


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        {children}

        <div className="Cards">
          <h2>15 Cashir, more coming</h2>
          <Card
            title="Wordpress for beginners"
            text="12 maado"
            image={require('../images/hero.png')}
          />
        </div>


      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
