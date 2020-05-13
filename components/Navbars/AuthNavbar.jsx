import React from "react";
import classnames from "classnames";
import Link from 'next/link';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container
} from "reactstrap";

const AuthNavbar = (props) => {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");

  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
  })

  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white")
    } else {
      setcolor("navbar-transparent");
    }
  };

  const toggleCollapse = () => {
    setcollapseOpen(!collapseOpen);
    if (!collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  return (
    <>
      <Navbar
        className={classnames("navbar-absolute fixed-top", color)}
        expand="lg"
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <NavbarBrand href="#carlos" onClick={e => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <button
            aria-controls="navigation-index"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-toggle="collapse"
            type="button"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              {/* <NavItem>
                <Link href="/login">
                  <a className="nav-link">
                    <i className="tim-icons icon-single-02" /> Ingreso
                  </a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/register">
                  <a className="nav-link">
                    <i className="tim-icons icon-laptop" /> Registro
                  </a>
                </Link>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AuthNavbar;
