"use strict";
// src/models/Comment.ts
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
exports.CommentFactory = CommentFactory;
var sequelize_1 = require("sequelize");
var post_1 = require("./post"); // Import Post model
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Comment;
}(sequelize_1.Model));
function CommentFactory(sequelize) {
    Comment.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        comment_content: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        commentable_type: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        commentable_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize: sequelize,
        tableName: 'comments',
    });
    // Set up polymorphic associations
    Comment.belongsTo(post_1.default, { foreignKey: 'commentable_id', constraints: false });
    return Comment;
}
exports.default = Comment;
