import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Albumenia</h2>

        <div className="footer-links">
          <a href="#">Home</a>
          {/* <a href="#">Explore my git</a> */}
          <a href="https://visvesvararao04.github.io/Portfolio-using-ReactJs/">About me</a>
          <a href='mailto:viswv77@gmail.com'>Contact</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Albumenia. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
