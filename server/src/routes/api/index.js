"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/api/index.ts
var express_1 = require("express");
var user_routes_1 = require("./user-routes");
var router = express_1.default.Router();
router.use('/users', user_routes_1.default); // This will handle routes at /api/users
exports.default = router; // Export the router as the default export
