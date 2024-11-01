"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
exports.CircleFactory = CircleFactory;
var sequelize_1 = require("sequelize");
var uuid_1 = require("uuid");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Circle;
}(sequelize_1.Model));
exports.Circle = Circle;
function CircleFactory(sequelize) {
    Circle.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        permission_key: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: uuid_1.v4, // Automatically generates a unique key
        },
        assignedUserId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        tableName: 'circles',
        sequelize: sequelize,
    });
    return Circle;
}
