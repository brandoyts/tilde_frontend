import React from "react";
import Form from "./Form";

import "../../../../css/guest-page.css";

function GuestPage() {
  return (
    <div className="guest-page">
      <div className="guest-page__heading">
        <div className="container">
          <h1>COVID-19</h1>
          <h3>CONTACT TRACING FORM</h3>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              veniam! Ipsa magnam quas natus expedita blanditiis facilis,
              molestias maxime quam rerum reprehenderit numquam est labore! Eum
              delectus atque magni eius est consectetur debitis dolor facere
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <Form />
      </div>
    </div>
  );
}

export default GuestPage;
