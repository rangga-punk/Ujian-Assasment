import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./portofolio.css";

function Portofolio() {
  return (
    <div>
      {/* PORTOFOLIO */}
      <nav className="navbar navbar-expand-lg px-4">
        <a className="navbar-brand fw-bold " href="#home">
          EL PATOK
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <a href="#download-cv" className="btn btn-warning ms-3">Download CV</a>
        </div>
      </nav>

      <header className="container text-center my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <p className="text-muted">Hi, I am</p>
            <h1 className="fw-bold">EL PATOK</h1>
            <h2 className="text-primary">Website Developer</h2>
            <p className="text-secondary mt-3">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
              Aliquet donec morbi convallis pretium.
            </p>
            <a href="#hire-me" className="btn btn-danger mt-3">Hire Me</a>
          </div>
          <div className="col-md-6">
            <img
              src="data:image/jpeg;base64,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"
              alt="Profile"
              className="images img-fluid rounded-circle "
            />
          </div>
        </div>
      </header>

    </div>
  );
}

export default Portofolio;
