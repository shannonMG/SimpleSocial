"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
// Middleware function to authenticate JWT token
var authenticateToken = function (req, res, next) {
    // Get the authorization header from the request
    var authHeader = req.headers.authorization;
    // Check if the authorization header is present
    if (authHeader) {
        // Extract the token from the authorization header
        var token = authHeader.split(' ')[1];
        // Get the secret key from the environment variables
        var secretKey = process.env.JWT_SECRET || ''; // Ensure JWT_SECRET is set in your .env file
        // Verify the JWT token
        jsonwebtoken_1.default.verify(token, secretKey, function (err, decoded) {
            if (err) {
                return res.sendStatus(403); // Send forbidden status if the token is invalid
            }
            // Attach the decoded user information to the request object
            req.user = decoded;
            next(); // Call the next middleware function
        });
    }
    else {
        res.sendStatus(401); // Send unauthorized status if no authorization header is present
    }
};
exports.authenticateToken = authenticateToken;
