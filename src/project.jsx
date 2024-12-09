import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./project.css";

function Project() {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2>My Projects</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus.
        </p>
        <div className="btn-group" role="group" aria-label="Project Categories">
          <button type="button" className="btn btn-outline-primary">All</button>
          <button type="button" className="btn btn-outline-primary">UI/UX</button>
          <button type="button" className="btn btn-outline-primary">Web Design</button>
          <button type="button" className="btn btn-outline-primary">App Design</button>
          <button type="button" className="btn btn-outline-primary">Graphic Design</button>
        </div>
      </div>

      <div className="row">
        {/* Project 1 */}
        <div className=" col-md-4 mb-4">
          <div className="card">
            <div className="image-wrapper">
              <img src="/projek1.png" className="card-img-top" alt="AirCalling Landing Page Design"  />
            </div>
            <div className="card-body">
              <h5 className="card-title">AirCalling Landing Page Design</h5>
              <p className="card-text">Web Design</p>
              <a href="#" className="btn btn-warning">Detail</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="image-wrapper">
              <img src="/projek2.png" className="card-img-top" alt="Business Landing Page Design" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Business Landing Page Design</h5>
              <p className="card-text">Web Design</p>
              <a href="#" className="btn btn-warning">Detail</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="image-wrapper">
              <img src="/projek3.png" className="card-img-top" alt="Ecom Web Page Design" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Ecom Web Page Design</h5>
              <p className="card-text">Web Design</p>
              <a href="#" className="btn btn-warning">Detail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
