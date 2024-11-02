"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/pages/LandingPage.tsx
var react_router_dom_1 = require("react-router-dom");
// import Footer from '../components/Footer';
require("../../index.css");
var LandingPage_module_css_1 = require("./LandingPage.module.css"); // Import the CSS module
var LandingPage = function () {
    var location = (0, react_router_dom_1.useLocation)();
    var isBaseRoute = location.pathname === '/';
    return (<div className={LandingPage_module_css_1.default.landingContainer}>
      {isBaseRoute && (<div className={LandingPage_module_css_1.default.landingContent}>
          <h1 className={LandingPage_module_css_1.default.heading}>Welcome to SimpleSocial</h1>
          <nav>
            <react_router_dom_1.Link to="/login" className={LandingPage_module_css_1.default.navLink}>
              Login
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/signup" className={LandingPage_module_css_1.default.navLink}>
              Sign Up
            </react_router_dom_1.Link>
          </nav>
        </div>)}
      {/* Render Login or Signup components */}
      <react_router_dom_1.Outlet />
      {/* Footer */}
      {/* <Footer className={styles.footer} /> */}
    </div>);
};
exports.default = LandingPage;
