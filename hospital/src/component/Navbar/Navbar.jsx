import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav
  className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
  id="ftco-navbar"
>
  <div className="container">
    <a className="navbar-brand" href="index.html">
      MM Hospital
    </a>
    <button
      className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
      type="button"
      data-toggle="collapse"
      data-target="#ftco-nav"
      aria-controls="ftco-nav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="oi oi-menu" /> Menu
    </button>
    <div className="collapse navbar-collapse" id="ftco-nav">
      <ul className="navbar-nav nav ml-auto">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/aboutdetails" className="nav-link">
            <span>About</span>
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="#department-section" className="nav-link">
            <span>Department</span>
          </a>
        </li> */}
        <li className="nav-item">
          <a href="/doctordetails" className="nav-link">
            <span>Doctors</span>
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="#blog-section" className="nav-link">
            <span>Blog</span>
          </a>
        </li> */}
        <li className="nav-item">
          <a href="/contactdetails" className="nav-link">
            <span>Contact</span>
          </a>
        </li>
        <li className="nav-item cta mr-md-2">
          <a href="appointment.html" className="nav-link">
            Appointment
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
