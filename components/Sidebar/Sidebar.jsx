import React from "react";
import Link from 'next/link';
import PropTypes from "prop-types";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Nav, Collapse } from "reactstrap";

var ps;

const Sidebar = (props) => {

  const { activeColor, logo, closeSidebar } = props;
  let logoImg = null;
  let logoText = null;
  let sidebar = React.useRef();
  let [state, setState] = React.useState();

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar);
    }
    let _state = getCollapseStates(props.routes);
    if (state === undefined) setState(_state);
  });


  const getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.views),
          ...getCollapseStates(prop.views),
          ...initialState
        };
      }
      return null;
    });
    return initialState;
  };

  const getCollapseInitialState = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.href.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  }

  const createLinks = routes => {
    const { rtlActive } = props;
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <li
            className={getCollapseInitialState(prop.views) ? "active" : ""}
            key={key}
          >
            <a
              href="#carlos"
              data-toggle="collapse"
              aria-expanded={state[prop.state]}
              onClick={e => {
                e.preventDefault();
                setState(st);
              }}
            >
              {prop.icon !== undefined ? (
                <>
                  <i className={prop.icon} />
                  <p>
                    {rtlActive ? prop.rtlName : prop.name}
                    <b className="caret" />
                  </p>
                </>
              ) : (
                  <>
                    <span className="sidebar-mini-icon">
                      {rtlActive ? prop.rtlMini : prop.mini}
                    </span>
                    <span className="sidebar-normal">
                      {rtlActive ? prop.rtlName : prop.name}
                      <b className="caret" />
                    </span>
                  </>
                )}
            </a>
            <Collapse isOpen={state[prop.state]}>
              <ul className="nav">{createLinks(prop.views)}</ul>
            </Collapse>
          </li>
        );
      }
      return (
        <li className={activeRoute(prop.path)} key={key}>
          <Link href={prop.path} >
            {prop.icon !== undefined ? (
              <a onClick={closeSidebar}>
                <i className={prop.icon} />
                <p>{rtlActive ? prop.rtlName : prop.name}</p>
              </a>
            ) : (
                <>
                  <span className="sidebar-mini-icon">
                    {rtlActive ? prop.rtlMini : prop.mini}
                  </span>
                  <span className="sidebar-normal">
                    {rtlActive ? prop.rtlName : prop.name}
                  </span>
                </>
              )}
          </Link>
        </li>
      );
    });
  };

  let activeRoute = () => { }
  React.useEffect(() => {
    activeRoute = routeName => {
      return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };
  }, []);

  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <a
          href={logo.outterLink}
          className="simple-text logo-mini"
          target="_blank"
          onClick={closeSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </a>
      );
      logoText = (
        <a
          href={logo.outterLink}
          className="simple-text logo-normal"
          target="_blank"
          onClick={closeSidebar}
        >
          {logo.text}
        </a>
      );
    } else {
      logoImg = (
        <Link
          href={logo.innerLink}
        >
          <a onClick={closeSidebar} className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </a>
        </Link>
      );
      logoText = (
        <Link
          href={logo.innerLink}
          className="simple-text logo-normal"
        >
          <a onClick={closeSidebar} >
            {logo.text}
          </a>
        </Link>
      );
    }
  }

  return (
    <div className="sidebar" data={activeColor}>
      <div className="sidebar-wrapper" ref={sidebar}>
        {logoImg !== null || logoText !== null ? (
          <div className="logo">
            {logoImg}
            {logoText}
          </div>
        ) : null}
        <Nav>{createLinks(props.routes)}</Nav>
      </div>
    </div>
  );
}

export default Sidebar;
