// import React from 'react'

import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Have a project in mind? <br className="sm:block hidden"/> Let&apos;s buils something together! </p>
        <Link to='/contact' className="btn"> Contact</Link>
    </section>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA