import React from "react";
import classNames from "classnames";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  UncontrolledTooltip
} from "reactstrap";
import Cookies from 'universal-cookie';
import Router from 'next/router';

const cookies = new Cookies();
const AdminNavbar = (props) => {

  const [collapseOpen, set1] = React.useState(false);
  const [modalSearch, set2] = React.useState(false);
  const [color, set3] = React.useState("navbar-transparent");

  React.useEffect(() => {
    window.addEventListener("resize", updateColor());
    return () => {
      window.removeEventListener("resize", updateColor());
    }
  })

  const exit = () => {
    cookies.remove("Token");
    Router.replace("/login");
  }

  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      set3("bg-white");
    } else {
      set3("navbar-transparent");
    }
  };

  const toggleCollapse = () => {
    if (collapseOpen) {
      set3("navbar-transparent");
    } else {
      set3("bg-white");
    }
    set1(!collapseOpen);
  };

  const toggleModalSearch = () => {
    set2(!modalSearch);
  };

  let fullscreen = true;
  React.useEffect(() => {
    fullscreen = window.location.pathname.indexOf("full-screen-map") === -1;
  });

  return (
    <>
      <Navbar
        className={classNames("navbar-absolute", {
          [color]: fullscreen
        })}
        expand="lg"
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-minimize d-inline">
              <Button
                className="minimize-sidebar btn-just-icon"
                color="link"
                id="tooltip209599"
                onClick={() => props.handleMiniClick()}
              >
                <i className="tim-icons icon-align-center visible-on-sidebar-regular" />
                <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini" />
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip209599"
                placement="right"
              >
                Menu
                </UncontrolledTooltip>
            </div>
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened
              })}
            >
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => props.toggleSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="#carlos" onClick={e => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <div className="photo">
                    <img alt="..." src="assets/img/placeholder.jpg" />
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">Salir</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Perfil</DropdownItem>
                  </NavLink>
                  <DropdownItem divider tag="li" />
                  <NavLink tag="li">
                    <DropdownItem className="nav-item" onClick={() => exit()}>Salir</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={() => toggleModalSearch()}
      >
        <div className="modal-header">
          <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </div>
      </Modal>
    </>
  );
}

export default AdminNavbar;
