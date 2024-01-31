import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
// import "./index.css";

const Row3 = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mt-5">
      <div className="">
        <Nav tabs style={{ position: "sticky" }}>
          <NavItem>
            <NavLink onClick={() => scrollToSection("section1")}>
              Car Image
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("section2")}>
              Car Info
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("section3")}>
              Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("section3")}>
              Engine & Performace
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("section3")}>
              Color Car
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("section3")}>
              Mileage
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("section3")}>FAQ's</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("section3")}>
              Question & Answer
            </NavLink>
          </NavItem>
        </Nav>

        <div id="section1" className="section" style={{ height: "auto" }}>
          
        </div>

        <div id="section2" className="section" style={{ height: "auto" }}>
          
        </div>

        <div id="section3" className="section" style={{ height: "auto" }}>
         
        </div>
      </div>
    </div>
  );
};

export default Row3;
