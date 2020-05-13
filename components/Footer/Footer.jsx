import React from "react";
import { Container, Row } from "reactstrap";

const Footer = (props) => {
  return (
    <footer
      className={"footer" + (props.default ? " footer-default" : "")}
    >
      <Container fluid={props.fluid}>
        <div className="copyright">
          © {new Date().getFullYear()} derechos reservados {" "}
          <a href="#" target="_blank">
            {""}
          </a>{" "}
          {""}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
