"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// App.tsx
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var landingpage_1 = require("./components/landingpage/landingpage");
var login_1 = require("./components/landingpage/login");
var signup_1 = require("./components/landingpage/signup");
var App_module_css_1 = require("./App.module.css");
var App = function () {
    return (<react_router_dom_1.BrowserRouter>
      <div className={App_module_css_1.default.appContainer}>
        <div className={App_module_css_1.default.componentWrapper}>
          <react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/" element={<landingpage_1.default />}/>
            <react_router_dom_1.Route path="login" element={<login_1.default />}/>
            <react_router_dom_1.Route path="signup" element={<signup_1.default />}/>
          </react_router_dom_1.Routes>
        </div>
      </div>
    </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
