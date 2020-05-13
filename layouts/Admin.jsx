import React from "react";
import Router from 'next/router';
import PerfectScrollbar from 'react-perfect-scrollbar';
import NotificationAlert from "react-notification-alert";
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import routes from "../variables/routes";
import { ContextOne } from '../context/global';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
var ps;
const Admin = (props) => {

  const { state, dispatch } = React.useContext(ContextOne)
  const [activeColor, set1] = React.useState("blue");
  const [sidebarMini, set2] = React.useState(false);
  const [opacity, set3] = React.useState(0);
  const [sidebarOpened, set4] = React.useState(false);
  let mainPanel = React.useRef();
  let notificationAlert = React.useRef();
  let getActiveRoute = () => { };
  let showNavbarButton = () => { };
  let getRoutes = () => { };
  let handleMiniClick = () => { };
  let toggleSidebar = () => { };
  let closeSidebar = () => { };

  if (state.load || cookies.get("Token") === "" || cookies.get("Token") === undefined) {
    return "..."
  }
  if (typeof window['DocumentTouch'] === 'undefined') {
    window['DocumentTouch'] = HTMLDocument
  }

  if (navigator.platform.indexOf("Win") > -1) {
    document.documentElement.className += " perfect-scrollbar-on";
    document.documentElement.classList.remove("perfect-scrollbar-off");
    ps = new PerfectScrollbar(mainPanel);
    let tables = document.querySelectorAll(".table-responsive");
    for (let i = 0; i < tables.length; i++) {
      ps = new PerfectScrollbar(tables[i]);
    }
  }

  window.addEventListener("scroll", showNavbarButton);

  showNavbarButton = () => {
    if (
      document.documentElement.scrollTop > 50 ||
      document.scrollingElement.scrollTop > 50 ||
      mainPanel.scrollTop > 50
    ) {
      set3(1);
    } else if (
      document.documentElement.scrollTop <= 50 ||
      document.scrollingElement.scrollTop <= 50 ||
      mainPanel.scrollTop <= 50
    ) {
      set3(0);
    }
  };

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };


  getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = this.getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.pathname.indexOf(
            routes[i].path
          ) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  handleMiniClick = () => {
    if (document.body.classList.contains("sidebar-mini")) {
      set2(false);
    } else {
      set2(true);
    }
    document.body.classList.toggle("sidebar-mini");
  };

  toggleSidebar = () => {
    set4(!sidebarOpened);
    document.documentElement.classList.toggle("nav-open");
  };

  closeSidebar = () => {
    set4(false);
    document.documentElement.classList.remove("nav-open");
  };

  return (
    <div className="wrapper">
      <div className="rna-container">
        <NotificationAlert ref={notificationAlert} />
      </div>
      <div
        className="navbar-minimize-fixed"
        style={{ opacity: opacity }}
      >
        <button
          className="minimize-sidebar btn btn-link btn-just-icon"
          onClick={() => handleMiniClick()}
        >
          <i className="tim-icons icon-align-center visible-on-sidebar-regular text-muted" />
          <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted" />
        </button>
      </div>
      <Sidebar
        {...props}
        routes={routes}
        activeColor={activeColor}
        closeSidebar={closeSidebar}
      />
      <div
        className="main-panel"
        ref={mainPanel}
        data={activeColor}
      >
        <AdminNavbar
          {...props}
          handleMiniClick={handleMiniClick}
          brandText={getActiveRoute(routes)}
          sidebarOpened={sidebarOpened}
          toggleSidebar={toggleSidebar}
        />
        {props.children}
        < Footer fluid />
      </div >
    </div >
  );
}

export default Admin;
