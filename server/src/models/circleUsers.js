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
exports.CircleUsers = void 0;
exports.CircleUsersFactory = CircleUsersFactory;
var sequelize_1 = require("sequelize");
var CircleUsers = /** @class */ (function (_super) {
    __extends(CircleUsers, _super);
    function CircleUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CircleUsers;
}(sequelize_1.Model));
exports.CircleUsers = CircleUsers;
function CircleUsersFactory(sequelize) {
    CircleUsers.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // Name of the User table
                key: 'id',
            },
        },
        circle_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'circles', // Name of the Circle table
                key: 'id',
            },
        },
    }, {
        tableName: 'circle_users', // Naming the join table clearly
        sequelize: sequelize,
        timestamps: true,
    });
    return CircleUsers;
}
