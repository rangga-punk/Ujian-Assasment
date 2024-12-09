import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

function Footer() {
  return (
    <footer className="bg-light text-center py-5">
      {/* Section 1: Heading and Email Form */}
      <div className="container">
        <h2 className="fw-bold">Lets Design Together</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium.
        </p>
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="form-control email-input"
          />
          <button className="btn btn-warning px-4">Contact Me</button>
        </div>
      </div>

      {/* Section 2: Logo and Links */}
      <div className="mt-5">
        <h3 className="fw-bold">EL PATOK</h3>
        <nav className="d-flex justify-content-center flex-wrap mt-3 footer-links">
          <a href="#" className="mx-2 text-decoration-none text-muted">
            Home
          </a>
          <a href="#" className="mx-2 text-decoration-none text-muted">
            About Me
          </a>
          <a href="#" className="mx-2 text-decoration-none text-muted">
            Services
          </a>
          <a href="#" className="mx-2 text-decoration-none text-muted">
            Projects
          </a>
          <a href="#" className="mx-2 text-decoration-none text-muted">
            Testimonials
          </a>
          <a href="#" className="mx-2 text-decoration-none text-muted">
            Contact
          </a>
        </nav>
      </div>

      {/* Section 3: Social Icons and Copyright */}
      <div className="mt-5 pt-3 border-top">
        <div className="d-flex justify-content-center gap-3 social-icons">
          <a href="#" className="icon facebook">F</a>
          <a href="#" className="icon twitter">T</a>
          <a href="#" className="icon instagram">I</a>
          <a href="#" className="icon linkedin">L</a>
        </div>
        <p className="text-muted mt-3">
          © 2023 <span className="fw-bold text-warning">EL PATOK</span> All
          Rights Reserved, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
