"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = require("../../models/user");
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
var router = express_1.default.Router();
var SECRET_KEY = process.env.JWT_SECRET || '195f2752525a316a3f97dd8401fee9f65a0b0ec96c5ce22c9ccb42b2706b44b1b02b492b6801e8dadef9cf0ba90b8203698e8a2b80a43853282d517799bcfd64';
// Registration route
var registerHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, existingUser, hashedPassword, newUser, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, user_1.default.findOne({ where: { email: email } })];
            case 1:
                existingUser = _b.sent();
                if (existingUser) {
                    res.status(400).json({ message: 'User already exists' });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, bcryptjs_1.default.hash(password, 10)];
            case 2:
                hashedPassword = _b.sent();
                return [4 /*yield*/, user_1.default.create({ email: email, password: hashedPassword })];
            case 3:
                newUser = _b.sent();
                token = jsonwebtoken_1.default.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, { expiresIn: '1h' });
                res.status(201).json({ message: 'User created', token: token });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).json({ message: 'Error creating user' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
// Login route
var loginHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, _b, token, error_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, user_1.default.findOne({ where: { email: email } })];
            case 1:
                user = _c.sent();
                _b = !user;
                if (_b) return [3 /*break*/, 3];
                return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
            case 2:
                _b = !(_c.sent());
                _c.label = 3;
            case 3:
                if (_b) {
                    res.status(400).json({ message: 'Invalid credentials' });
                    return [2 /*return*/];
                }
                token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
                res.status(200).json({ message: 'Logged in successfully', token: token });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _c.sent();
                console.error(error_2);
                res.status(500).json({ message: 'Error logging in' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
// Attach the handlers to routes
router.post('/register', registerHandler);
router.post('/login', loginHandler);
exports.default = router;
