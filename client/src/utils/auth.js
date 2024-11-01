"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_decode_1 = require("jwt-decode");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getProfile = function () {
        // TODO: return the decoded token
        var token = this.getToken(); //needed to define token to access it
        if (token) {
            return (0, jwt_decode_1.jwtDecode)(token); //sends back token as payload
        }
        return null;
    };
    AuthService.prototype.loggedIn = function () {
        // TODO: return a value that indicates if the user is logged in
        //only need to get token if user is logged in
        var token = this.getToken(); //check for token
        // return token;
        return !!token && !this.isTokenExpired(token); //ensure that user has token and token is not expired
    };
    AuthService.prototype.isTokenExpired = function (token) {
        // TODO: return a value that indicates if the token is expired
        if (!token)
            return true;
        try {
            var decodedToken = (0, jwt_decode_1.jwtDecode)(token);
            var currentTime = Date.now() / 1000;
            // return decodedToken.exp < currentTime;
            return decodedToken.exp !== undefined && decodedToken.exp < currentTime;
        }
        catch (error) {
            console.error('Error decoding token:', error);
            return true;
        }
    };
    AuthService.prototype.getToken = function () {
        // TODO: return the token
        var loggedUser = localStorage.getItem('id_token') || ' ';
        return loggedUser;
    };
    AuthService.prototype.login = function (idToken) {
        // TODO: set the token to localStorage
        // TODO: redirect to the home page
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('id_token');
        window.location.assign('/');
        // TODO: remove the token from localStorage
        // TODO: redirect to the login page
    };
    return AuthService;
}());
exports.default = new AuthService();
