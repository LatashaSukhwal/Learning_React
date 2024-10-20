/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function About() {
  const [mystyle, setmystyle] = useState({
    color: "white",
    backgroundColor: "black",
    
  });
  const [bttn, setbtn] = useState("Enable Light Mode");

  const togglestyle = () => {
    if (mystyle.color == "white") {
      setmystyle({
        color: "black",
        backgroundColor: "white",
        border:'2px solid white'
      });
      setbtn("Enable Dark mode ");
    } 
    else {
      setmystyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtn("Enable Light mode ");
    }
  };
  return (
    <div className="container" style={mystyle}>
      ABOUT US
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            style={mystyle}
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item&lsquo;s accordion body.</strong> It
              is shown by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance, as well as the showing
              and hiding via CSS transitions. You can modify any of this with
              custom CSS or overriding our default variables. It&#39;s also
              worth noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            style={mystyle}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item&lsquo;s accordion body.</strong>{" "}
              It is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance, as well as the showing
              and hiding via CSS transitions. You can modify any of this with
              custom CSS or overriding our default variables. It&rsquo;s also
              worth noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            style={mystyle}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item&lsquo;s accordion body.</strong> It
              is hidden by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It&#39;s also worth
              noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button className="button-primary"  onClick={togglestyle}>
          {bttn}
        </button>
      </div>
    </div>
  );
}
