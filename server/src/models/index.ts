// src/models/index.ts

import sequelize from '../config/connection.js'; // Import sequelize from configuration
import { UserFactory } from './user.js';
import { CircleFactory } from './circle.js';
import { CircleUsersFactory } from './circleUsers.js';
import { PostFactory } from './post.js';
import { MediaFactory } from './media.js';
import { CommentFactory } from './comment.js';

// Initialize models
const User = UserFactory(sequelize);
const Circle = CircleFactory(sequelize);
const CircleUsers = CircleUsersFactory(sequelize);
const Post = PostFactory(sequelize);
const Media = MediaFactory(sequelize);
const Comment = CommentFactory(sequelize);

// Define associations

// One-to-Many Associations
User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Media, { foreignKey: 'user_id' });
Media.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

Circle.hasMany(Post, { foreignKey: 'circle_id' });
Post.belongsTo(Circle, { foreignKey: 'circle_id' });

Circle.hasMany(Media, { foreignKey: 'circle_id' });
Media.belongsTo(Circle, { foreignKey: 'circle_id' });

// Polymorphic Association for Comment
Comment.belongsTo(Post, { foreignKey: 'commentable_id', constraints: false });
Comment.belongsTo(Media, { foreignKey: 'commentable_id', constraints: false });

// Many-to-Many Association through CircleUsers
User.belongsToMany(Circle, { through: CircleUsers, foreignKey: 'user_id' });
Circle.belongsToMany(User, { through: CircleUsers, foreignKey: 'circle_id' });

// Export models and sequelize instance
export { sequelize, User, Circle, CircleUsers, Post, Media, Comment };
