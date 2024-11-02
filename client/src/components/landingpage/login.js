"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/Login.tsx
var react_1 = require("react");
require("../../index.css");
var loginandsignup_module_css_1 = require("./loginandsignup.module.css");
var Login = function () {
    var _a = (0, react_1.useState)(''), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        // Handle login logic
    };
    return (<div className={loginandsignup_module_css_1.default.container}>
      <form className={loginandsignup_module_css_1.default.formCard} onSubmit={handleSubmit}>
        <h2 className={loginandsignup_module_css_1.default.heading}>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={function (e) { return setEmail(e.target.value); }} className={loginandsignup_module_css_1.default.input} required/>
        <input type="password" placeholder="Password" value={password} onChange={function (e) { return setPassword(e.target.value); }} className={loginandsignup_module_css_1.default.input} required/>
        <button type="submit" className={loginandsignup_module_css_1.default.button}>Login</button>
      </form>
    </div>);
};
exports.default = Login;
