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
exports.deleteCircle = exports.updateCircle = exports.createCircle = exports.getCircleById = exports.getAllCircle = void 0;
var circle_js_1 = require("../models/circle.js");
var user_js_1 = require("../models/user.js");
// GET /tickets
var getAllCircle = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var circles, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, circle_js_1.Circle.findAll({
                    // include: [
                    //   // {
                    //   //   model: User,
                    //   //   as: 'assignedUser', // This should match the alias defined in the association
                    //   //   attributes: ['username'], // Include only the username attribute
                    //   // },
                    // ],
                    })];
            case 1:
                circles = _a.sent();
                res.json(circles);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({ message: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllCircle = getAllCircle;
// GET /circles/:id
var getCircleById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, circle, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, circle_js_1.Circle.findByPk(id, {
                        include: [
                            {
                                model: user_js_1.User,
                                as: 'assignedUser', // This should match the alias defined in the association
                                attributes: ['username'], // Include only the username attribute
                            },
                        ],
                    })];
            case 2:
                circle = _a.sent();
                if (circle) {
                    res.json(circle);
                }
                else {
                    res.status(404).json({ message: 'Social Circle not found' });
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
exports.getCircleById = getCircleById;
// POST /tickets
var createCircle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, permission_key, assignedUserId, newCircle, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, permission_key = _a.permission_key, assignedUserId = _a.assignedUserId;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, circle_js_1.Circle.create({ name: name, permission_key: permission_key, assignedUserId: assignedUserId })];
            case 2:
                newCircle = _b.sent();
                res.status(201).json(newCircle);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                res.status(400).json({ message: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createCircle = createCircle;
// PUT /circle/:id
var updateCircle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name, permission_key, assignedUserId, circle, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, name = _a.name, permission_key = _a.permission_key, assignedUserId = _a.assignedUserId;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, circle_js_1.Circle.findByPk(id)];
            case 2:
                circle = _b.sent();
                if (!circle) return [3 /*break*/, 4];
                circle.name = name;
                circle.permission_key = permission_key;
                circle.assignedUserId = assignedUserId;
                return [4 /*yield*/, circle.save()];
            case 3:
                _b.sent();
                res.json(circle);
                return [3 /*break*/, 5];
            case 4:
                res.status(404).json({ message: 'Circle not found' });
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
exports.updateCircle = updateCircle;
// DELETE /circle/:id
var deleteCircle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, circle, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, circle_js_1.Circle.findByPk(id)];
            case 2:
                circle = _a.sent();
                if (!circle) return [3 /*break*/, 4];
                return [4 /*yield*/, circle.destroy()];
            case 3:
                _a.sent();
                res.json({ message: 'Circle deleted' });
                return [3 /*break*/, 5];
            case 4:
                res.status(404).json({ message: 'Circle not found' });
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
exports.deleteCircle = deleteCircle;
