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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
var user_js_1 = require("../models/user.js");
// GET /Users
var getAllUsers = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_js_1.default.findAll({
                        attributes: { exclude: ['password'] }
                    })];
            case 1:
                users = _a.sent();
                res.json(users);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({ message: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllUsers = getAllUsers;
// GET /Users/:id
var getUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_js_1.default.findByPk(id, {
                        attributes: { exclude: ['password'] }
                    })];
            case 2:
                user = _a.sent();
                if (user) {
                    res.json(user);
                }
                else {
                    res.status(404).json({ message: 'User not found' });
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(500).json({ message: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUserById = getUserById;
// POST /Users/-->should I change the endpoint to /Users/register?
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, location, time_zone, newUser, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password, location = _a.location, time_zone = _a.time_zone;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_js_1.default.create({ email: email, password: password, location: location, time_zone: time_zone })];
            case 2:
                newUser = _b.sent();
                res.status(201).json(newUser);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                res.status(400).json({ message: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
// PUT /Users/:id
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, email, password, location, time_zone, user, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, email = _a.email, password = _a.password, location = _a.location, time_zone = _a.time_zone;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, user_js_1.default.findByPk(id)];
            case 2:
                user = _b.sent();
                if (!user) return [3 /*break*/, 4];
                user.email = email;
                user.password = password;
                user.location = location;
                user.time_zone = time_zone;
                return [4 /*yield*/, user.save()];
            case 3:
                _b.sent();
                res.json(user);
                return [3 /*break*/, 5];
            case 4:
                res.status(404).json({ message: 'User not found' });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_4 = _b.sent();
                res.status(400).json({ message: error_4.message });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = updateUser;
// DELETE /Users/:id
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, user_js_1.default.findByPk(id)];
            case 2:
                user = _a.sent();
                if (!user) return [3 /*break*/, 4];
                return [4 /*yield*/, user.destroy()];
            case 3:
                _a.sent();
                res.json({ message: 'User deleted' });
                return [3 /*break*/, 5];
            case 4:
                res.status(404).json({ message: 'User not found' });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_5 = _a.sent();
                res.status(500).json({ message: error_5.message });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;