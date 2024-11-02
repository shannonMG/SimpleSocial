"use strict";
// src/models/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.Post = exports.CircleUsers = exports.Circle = exports.User = exports.sequelize = void 0;
var connection_js_1 = require("../config/connection.js"); // Import sequelize from configuration
exports.sequelize = connection_js_1.default;
var user_1 = require("./user");
var circle_1 = require("./circle");
var circleUsers_1 = require("./circleUsers");
var post_1 = require("./post");
var comment_1 = require("./comment");
// Initialize models
var User = (0, user_1.UserFactory)(connection_js_1.default);
exports.User = User;
var Circle = (0, circle_1.CircleFactory)(connection_js_1.default);
exports.Circle = Circle;
var CircleUsers = (0, circleUsers_1.CircleUsersFactory)(connection_js_1.default);
exports.CircleUsers = CircleUsers;
var Post = (0, post_1.PostFactory)(connection_js_1.default);
exports.Post = Post;
var Comment = (0, comment_1.CommentFactory)(connection_js_1.default);
exports.Comment = Comment;
// Define associations
// One-to-Many Associations
User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });
Circle.hasMany(Post, { foreignKey: 'circle_id' });
Post.belongsTo(Circle, { foreignKey: 'circle_id' });
Comment.belongsTo(Post, { foreignKey: 'commentable_id', constraints: false });
// Many-to-Many Association through CircleUsers
User.belongsToMany(Circle, { through: CircleUsers, foreignKey: 'user_id' });
Circle.belongsToMany(User, { through: CircleUsers, foreignKey: 'circle_id' });
