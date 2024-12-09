import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css";

function Services() {
    return (
        <section class="services-section">
    <div class="container text-center">
      <h2 class="fw-bold">Services</h2>
      <p class="text-secondary">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
        Aliquet donec morbi convallis pretium.
      </p>
      <div class="row mt-4">
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm border-0">
            <div class="card-body">
            <img src="/Vector1.png" alt="UI/UX Image"/>
              <div class="icon text-warning mb-3 fs-1 bi bi-layout-text-sidebar"></div>
              <h5 class="card-title fw-bold">UI/UX</h5>
              <p class="card-text text-secondary">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm border-0">
            <div class="card-body">
                <img src="/Vector2.png" alt="" />
              <div class="icon text-warning mb-3 fs-1 bi bi-code-slash"></div>
              <h5 class="card-title fw-bold">Web Design</h5>
              <p class="card-text text-secondary">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm border-0">
            <div class="card-body">
            <img src="/Vector3.png" alt="" />
              <div class="icon text-warning mb-3 fs-1 bi bi-phone"></div>
              <h5 class="card-title fw-bold">App Design</h5>
              <p class="card-text text-secondary">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm border-0">
            <div class="card-body">
            <img src="/Vector4.png" alt="UI/UX Image"/>
              <div class="icon text-warning mb-3 fs-1 bi bi-palette"></div>
              <h5 class="card-title fw-bold">Graphic Design</h5>
              <p class="card-text text-secondary">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
export default Services;