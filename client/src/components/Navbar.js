"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var auth_1 = require("../utils/auth");
var Navbar = function () {
    var _a = (0, react_1.useState)(false), loginCheck = _a[0], setLoginCheck = _a[1];
    var checkLogin = function () {
        if (auth_1.default.loggedIn()) {
            setLoginCheck(true);
        }
    };
    (0, react_1.useEffect)(function () {
        console.log(loginCheck);
        checkLogin();
    }, [loginCheck]);
    return (<div className='nav'>
      <div className='nav-title'>
        <react_router_dom_1.Link to='/'>Krazy Kanban Board</react_router_dom_1.Link>
      </div>
      <ul>
      {!loginCheck ? (<li className='nav-item'>
            <button type='button'>
              <react_router_dom_1.Link to='/login'>Login</react_router_dom_1.Link>
            </button>
          </li>) : (<li className='nav-item'>
            <button type='button' onClick={function () {
                auth_1.default.logout();
            }}>Logout</button>
          </li>)}
      </ul>
    </div>);
};
exports.default = Navbar;
