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
exports.deleteCircleUser = exports.updateCircleUser = exports.createCircleUser = exports.getCircleUsersById = exports.getAllCircleUsers = void 0;
var circleUsers_js_1 = require("../models/circleUsers.js");
// GET /circles/:circleid
//TO DO: add a query to get the users--query to users table if needed
var getAllCircleUsers = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var circleusers, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, circleUsers_js_1.CircleUsers.findAll({
                        include: [
                            {
                                model: circleUsers_js_1.CircleUsers,
                                as: 'user_id', // This should match the alias defined in the association
                                // attributes: ['username'], // not sure if this needs to be user or not 
                            },
                        ],
                    })];
            case 1:
                circleusers = _a.sent();
                res.json(circleusers);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({ message: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllCircleUsers = getAllCircleUsers;
// GET /posts/:id
//may need an additonal query from the users table
var getCircleUsersById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, circleUsers_js_1.CircleUsers.findByPk(id, {
                        include: [
                            {
                                model: circleUsers_js_1.CircleUsers,
                                as: 'user_id', // This should match the alias defined in the association
                                // attributes: ['username'], // Not sure this needs to be username or circle?
                            },
                        ],
                    })];
            case 2:
                post = _a.sent();
                if (post) {
                    res.json(post);
                }
                else {
                    res.status(404).json({ message: 'CircleUser not found' });
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
exports.getCircleUsersById = getCircleUsersById;
// POST /circles/circleId/users
var createCircleUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, user_id, circle_id, newCircleUser, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, user_id = _a.user_id, circle_id = _a.circle_id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, circleUsers_js_1.CircleUsers.create({ user_id: user_id, circle_id: circle_id })];
            case 2:
                newCircleUser = _b.sent();
                res.status(201).json();
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                res.status(400).json({ message: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createCircleUser = createCircleUser;
// PUT /post/:id
var updateCircleUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, user_id, circle_id, circleuser, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, user_id = _a.user_id, circle_id = _a.circle_id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, circleUsers_js_1.CircleUsers.findByPk(id)];
            case 2:
                circleuser = _b.sent();
                if (!circleuser) return [3 /*break*/, 4];
                circleuser.user_id = user_id;
                circleuser.circle_id = circle_id;
                return [4 /*yield*/, post.save()];
            case 3:
                _b.sent();
                res.json(circleuser);
                return [3 /*break*/, 5];
            case 4:
                res.status(404).json({ message: 'Post not found' });
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
exports.updateCircleUser = updateCircleUser;
// DELETE /post/:id
var deleteCircleUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, circleUsers_js_1.CircleUsers.findByPk(id)];
            case 2:
                post = _a.sent();
                if (!post) return [3 /*break*/, 4];
                return [4 /*yield*/, post.destroy()];
            case 3:
                _a.sent();
                res.json({ message: 'Post deleted' });
                return [3 /*break*/, 5];
            case 4:
                res.status(404).json({ message: 'Post not found' });
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
exports.deleteCircleUser = deleteCircleUser;
