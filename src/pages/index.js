import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <p> <h1> Welcome to <br /> our new website</h1> </p>
        <p>Wax badan ayaa kusoo kordhinay</p>
        <Link to="/page-2/">GET IN TOUCH</Link>
      </div>
    </div>



    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

  </Layout>
)

export default IndexPage
